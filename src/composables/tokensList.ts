import BigNumber from 'bignumber.js';
import { computed, Ref } from '@vue/composition-api';
import type {
  IToken,
  ITokenList,
  IDefaultComposableOptions,
  ICoin,
  IAsset,
  Balance,
} from '../types';
import { AETERNITY_CONTRACT_ID } from '../popup/utils';
import { useBalances } from './balances';
import { useMultisigAccounts } from './multisigAccounts';

export interface UseTokensListOptions extends IDefaultComposableOptions {
  /**
   * Restrict the list to tokens owned by the user
   */
  ownedOnly?: boolean
  /**
   * Restrict the list to tokens with convertedBalance greater than 0
   */
  withBalanceOnly?: boolean
  /**
   * Search the list by the symbol, name or contractId
   */
  searchTerm?: Ref<string>

  /**
   * Restrict the tokens list based on the account type.
   */
  isMultisig?: boolean
}

export function useTokensList({
  store,
  ownedOnly = false,
  withBalanceOnly = false,
  searchTerm,
  isMultisig,
}: UseTokensListOptions) {
  const { balance, aeternityCoin } = useBalances({ store });
  const { activeMultisigAccount } = useMultisigAccounts({ store });

  const availableTokens = computed<ITokenList>(() => (
    isMultisig
      ? []
      : (store.state as any).fungibleTokens.availableTokens
  ));
  const tokenBalances = computed<IToken[]>(() => store.getters['fungibleTokens/tokenBalances']);

  const aeTokenBalance = computed((): Balance => (
    isMultisig
      ? new BigNumber(activeMultisigAccount.value?.balance || 0)
      : balance.value || new BigNumber(0)
  ));

  /**
   * Returns the default aeternity meta information
   */
  const aeToken = computed((): ICoin => ({
    ...aeternityCoin.value,
    convertedBalance: +aeTokenBalance.value,
  }));

  /**
   * Converts the token information object into an array and put the AE at the beginning
   */
  const allTokens = computed<IAsset[]>(() => {
    const tokens: IToken[] = Object.entries(availableTokens.value)
      .map(([contractId, tokenData]) => ({ ...tokenData, contractId }));

    tokenBalances.value.forEach((singleBalance) => {
      const index = tokens.findIndex((token) => token.contractId === singleBalance?.contractId);
      if (index !== -1) {
        tokens[index] = singleBalance;
      }
    });

    return [
      ...(aeToken.value ? [aeToken.value] : []),
      ...tokens,
    ];
  });

  /**
   * Filter the available assets with options provided for the composable and the search text
   */
  const filteredTokens = computed<IAsset[]>(() => {
    const searchTermParsed = (searchTerm?.value || '').trim().toLowerCase();
    return allTokens.value
      .filter((token) => (
        !ownedOnly
        || token.contractId === AETERNITY_CONTRACT_ID
        || tokenBalances.value.includes(token)
      ))
      .filter((token) => (
        !withBalanceOnly
        || token.contractId === AETERNITY_CONTRACT_ID
        || (token.convertedBalance && +token.convertedBalance)
      ))
      .filter(({ symbol, name, contractId }) => (
        !searchTermParsed
        || symbol?.toLowerCase().includes(searchTermParsed)
        || name?.toLowerCase().includes(searchTermParsed)
        || (
          searchTermParsed.startsWith('ct_')
          && contractId?.toLowerCase().includes(searchTermParsed)
        )
      ));
  });

  return {
    aeToken,
    allTokens,
    filteredTokens,
    aeTokenBalance,
  };
}
