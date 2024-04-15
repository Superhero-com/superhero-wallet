/* eslint-disable no-param-reassign */

import { computed, watch } from 'vue';
import BigNumber from 'bignumber.js';
import { Encoding } from '@aeternity/aepp-sdk';
import { isAssetCoin, toShiftedBigNumber } from '@/utils';
import type {
  AccountAddress,
  AssetContractId,
  AssetList,
  IToken,
  ITokenBalance,
  ITransaction,
  ProtocolRecord,
  Protocol,
  Dictionary,
  ITx,
} from '@/types';
import { PROTOCOLS, STORAGE_KEYS } from '@/constants';
import { ProtocolAdapterFactory } from '@/lib/ProtocolAdapterFactory';

import FungibleTokenFullInterfaceACI from '@/protocols/aeternity/aci/FungibleTokenFullInterfaceACI.json';

import { uniqBy } from 'lodash-es';
import { useAccounts } from './accounts';
import { useAeSdk } from './aeSdk';
import { useTippingContracts } from './tippingContracts';
import { createPollingBasedOnMountedComponents } from './composablesHelpers';
import { useStorageRef } from './storageRef';
import { useNetworks } from './networks';

let composableInitialized = false;

/**
 * List of all fungible tokens available on user's protocols.
 * Does not include custom tokens extracted from user's token balances.
 * As this list is quite big (hundreds of items) it requires processing optimizations.
 */
const defaultTokensAvailable = useStorageRef<ProtocolRecord<AssetList>>(
  {},
  STORAGE_KEYS.fungibleTokenList,
);

/**
 * List of user account's token asset balances.
 */
const tokenBalances = useStorageRef<ITokenBalance[]>(
  [],
  STORAGE_KEYS.fungibleTokenBalances,
);

/**
 * List of all fungible tokens available on user's protocols.
 * Includes tokens from the user's account that are not on the main list.
 */
const tokensAvailable = computed((): ProtocolRecord<AssetList> => {
  const uniqueTokens: IToken[] = uniqBy(tokenBalances.value, 'contractId')
    .map((tokenBalance) => ({
      contractId: tokenBalance.contractId,
      protocol: tokenBalance.protocol,
      name: tokenBalance?.name!,
      symbol: tokenBalance?.symbol!,
    }));

  const customTokensAvailable = uniqueTokens.reduce((customTokens, token) => {
    const { contractId, protocol } = token;
    if (!customTokens[protocol]) {
      customTokens[protocol] = {} as AssetList;
    }
    if (!defaultTokensAvailable?.value?.[protocol]?.[contractId]) {
      customTokens[protocol]![contractId] = token;
    }
    return customTokens;
  }, {} as typeof tokensAvailable.value);

  return Object.values(PROTOCOLS).reduce((allTokens, protocol) => {
    allTokens[protocol] = {
      ...defaultTokensAvailable.value[protocol],
      ...customTokensAvailable[protocol],
    };
    return allTokens;
  }, {} as typeof defaultTokensAvailable.value);
});

function getProtocolAvailableTokens(protocol: Protocol): AssetList {
  return tokensAvailable.value[protocol] || {} as AssetList;
}

const availableTokensPooling = createPollingBasedOnMountedComponents(60000);
const tokenBalancesPooling = createPollingBasedOnMountedComponents(10000);

let areTokenBalancesUpdating = false;

/**
 * Store and provide the access to all protocol's fungible tokens.
 */
export function useFungibleTokens() {
  const { activeNetwork, onNetworkChange } = useNetworks();
  const { getAeSdk } = useAeSdk();
  const { tippingContractAddresses } = useTippingContracts();
  const {
    accounts,
    protocolsInUse,
    getLastActiveProtocolAccount,
  } = useAccounts();

  function getAccountTokenBalances(address: AccountAddress): ITokenBalance[] {
    return tokenBalances.value.filter((token) => token.address === address) || [];
  }

  function getAccountTokenBalance(
    address: AccountAddress,
    contractId: string,
  ): ITokenBalance | undefined {
    return getAccountTokenBalances(address)
      .find((tokenBalance) => tokenBalance.contractId === contractId);
  }

  async function loadAvailableTokens() {
    const tokensFetchPromises = protocolsInUse.value.map(
      (protocol) => ProtocolAdapterFactory.getAdapter(protocol).fetchAvailableTokens?.(),
    );
    const currentNetworkName = activeNetwork.value.name;
    // for each promise check if it returned null, if so, use cached data
    // because it means that we couldn't fetch new data
    const tokens: IToken[] = (await Promise.all(tokensFetchPromises)).map(
      (protocolTokens, index) => (
        protocolTokens
        || Object.values(defaultTokensAvailable.value[protocolsInUse.value[index]] || {})
      ),
    ).flat();

    // This is necessary in case the user switches between networks faster,
    // than the available tokens are returned (limitations of the free Ethereum middleware)
    if (currentNetworkName !== activeNetwork.value.name) {
      return;
    }

    defaultTokensAvailable.value = tokens.reduce((accumulator, token) => {
      const { contractId, protocol } = token;
      if (!accumulator[protocol]) {
        accumulator[protocol] = {} as AssetList;
      }
      accumulator[protocol]![contractId] = token;
      return accumulator;
    }, {} as typeof defaultTokensAvailable.value);
  }

  async function loadTokenBalances() {
    if (areTokenBalancesUpdating) {
      return;
    }

    areTokenBalancesUpdating = true;
    const tokenBalancesFetchPromisesByAddress: Dictionary<Promise<ITokenBalance[] | null>> = {};
    accounts.value.map(
      ({ address, protocol }) => {
        tokenBalancesFetchPromisesByAddress[address] = ProtocolAdapterFactory
          .getAdapter(protocol).fetchAccountTokenBalances?.(address) ?? [] as any;
        return null;
      },
    );

    // for each promise check if it returned null, if so, use cached data
    // because it means that we couldn't fetch new data
    const cachedTokenBalances = tokenBalances.value;

    const cachedTokenBalancesByAddress: Dictionary<ITokenBalance[]> = {};
    cachedTokenBalances.map(
      (tokenBalance) => {
        if (!cachedTokenBalancesByAddress[tokenBalance.address]) {
          cachedTokenBalancesByAddress[tokenBalance.address] = [];
        }
        cachedTokenBalancesByAddress[tokenBalance.address].push(tokenBalance);
        return null;
      },
    );

    tokenBalances.value = (await Promise.all(
      (Object.entries(tokenBalancesFetchPromisesByAddress)).map(
        async ([address, promise]) => await promise || cachedTokenBalancesByAddress[address] || [],
      ),
    )).flat();

    areTokenBalancesUpdating = false;
  }

  async function createOrChangeAllowance(contractId: AssetContractId, amount: number | string) {
    const aeSdk = await getAeSdk();
    const account = getLastActiveProtocolAccount(PROTOCOLS.aeternity);
    const tokenData = getProtocolAvailableTokens(PROTOCOLS.aeternity)[contractId];

    const tokenContract = await aeSdk.initializeContract({
      aci: FungibleTokenFullInterfaceACI,
      address: contractId as any,
    });

    const { decodedResult } = await tokenContract.allowance({
      from_account: account?.address,
      for_account: tippingContractAddresses?.value?.tippingV2?.replace('ct_', 'ak_'),
    });

    const allowanceAmount = (decodedResult !== undefined)
      ? new BigNumber(decodedResult)
        .multipliedBy(-1)
        .plus(toShiftedBigNumber(amount, tokenData?.decimals!))
        .toNumber()
      : toShiftedBigNumber(amount, tokenData?.decimals!).toNumber();

    const getContractFunction = (tokenContract.methods as any)[
      decodedResult !== undefined ? 'change_allowance' : 'create_allowance'
    ];

    return getContractFunction(
      tippingContractAddresses.value?.tippingV2?.replace(
        `${Encoding.ContractAddress}_`,
        `${Encoding.AccountAddress}_`,
      ),
      allowanceAmount,
    );
  }

  function getTxAssetSymbol(transaction?: ITransaction): string | undefined {
    const { protocol = PROTOCOLS.aeternity, tx = {} as ITx } = transaction || {};
    const protocolTokens = getProtocolAvailableTokens(protocol);

    return (isAssetCoin(tx.contractId) || !tx.contractId)
      ? ProtocolAdapterFactory.getAdapter(protocol).coinSymbol
      : protocolTokens[tx.contractId]?.symbol;
  }

  availableTokensPooling(() => loadAvailableTokens());
  tokenBalancesPooling(() => loadTokenBalances());

  if (!composableInitialized) {
    composableInitialized = true;

    // Refresh balances when new account is added
    watch(accounts, (val, oldVal) => {
      if (val.length !== oldVal.length) {
        loadTokenBalances();

        // this is to check if the new account is the first for specified protocol
        if (val.filter(({ protocol }) => protocol === val.at(-1)?.protocol).length === 1) {
          loadAvailableTokens();
        }
      }
    });

    onNetworkChange(async (network, oldNetwork) => {
      const newMiddlewareUrl = network.protocols[PROTOCOLS.aeternity].middlewareUrl;
      const oldMiddlewareUrl = oldNetwork?.protocols?.[PROTOCOLS.aeternity]?.middlewareUrl;
      if (newMiddlewareUrl !== oldMiddlewareUrl) {
        tokenBalances.value = [];
        defaultTokensAvailable.value = {};
        await loadAvailableTokens();
        await loadTokenBalances();
      }
    });
  }

  return {
    tokenBalances,
    tokensAvailable,
    createOrChangeAllowance,
    getAccountTokenBalance,
    getAccountTokenBalances,
    getProtocolAvailableTokens,
    getTxAssetSymbol,
    loadTokenBalances,
    loadAvailableTokens,
  };
}
