import { computed, ref } from 'vue';
import type {
  IAccountLabeled,
  ITokenList,
  TxFunctionRaw,
  ITx,
  IDefaultComposableOptions,
} from '../types';
import { i18n } from '../store/plugins/languages';
import {
  FUNCTION_TYPE_DEX,
  FUNCTION_TYPE_MULTISIG,
  RETURN_TYPE_OK,
  TRANSACTION_OWNERSHIP_STATUS,
  TX_FUNCTIONS,
  TX_DIRECTION,
  getTxType,
  isContainingNestedTx,
  getInnerTransaction,
  isTxDex,
  getOwnershipStatus,
  getTxOwnerAddress,
} from '../popup/utils';
import { useAccounts } from './accounts';
import { useSdk } from './sdk';

interface UseTransactionOptions extends IDefaultComposableOptions {
  tx?: ITx
  externalAddress?: string
}

export function useTransactionTx({
  store,
  tx,
  externalAddress,
}: UseTransactionOptions) {
  const { dexContracts } = useSdk({ store });
  const { accounts, activeAccount } = useAccounts({ store });

  const outerTx = ref<ITx | undefined>(tx);
  const innerTx = ref<ITx | undefined>(tx ? getInnerTransaction(tx) : undefined);
  const ownerAddress = ref<string | undefined>(externalAddress);

  function setTransactionTx(newTx: ITx) {
    outerTx.value = newTx;
    innerTx.value = getInnerTransaction(newTx);
  }

  function setExternalAddress(address: string) {
    ownerAddress.value = address;
  }

  const availableTokens = computed<ITokenList>(
    () => (store.state as any).fungibleTokens.availableTokens,
  );

  const getTxDirection = computed(() => store.getters.getTxDirection);
  const getExplorerPath = computed(() => store.getters.getExplorerPath);
  const getPreferred = computed(() => store.getters['names/getPreferred']);

  const hasNestedTx = computed(() => outerTx.value && isContainingNestedTx(outerTx.value));

  const txType = computed(() => innerTx.value ? getTxType(innerTx.value) : null);
  const outerTxType = computed(() => outerTx.value ? getTxType(outerTx.value) : null);

  const isAllowance = computed((): boolean => (
    !!innerTx.value?.function
    && FUNCTION_TYPE_DEX.allowance.includes(innerTx.value.function as TxFunctionRaw)
    && !!availableTokens.value[innerTx.value.contractId]
  ));

  const isMultisig = computed((): boolean => (
    !!outerTx.value?.function
    && (
      Object.values(FUNCTION_TYPE_MULTISIG).includes(outerTx.value.function as TxFunctionRaw)
      || !!outerTx.value.payerId
    )
  ));

  const isErrorTransaction = computed(
    (): boolean => {
      if (!outerTx.value) {
        return false;
      }
      const { returnType } = outerTx.value;
      return !!(returnType && returnType !== RETURN_TYPE_OK);
    },
  );

  const isDex = computed((): boolean => isTxDex(innerTx.value, dexContracts.value));

  const txOwnerAddress = computed(() => getTxOwnerAddress(innerTx.value));

  const ownershipStatus = computed(() => getOwnershipStatus(
    activeAccount.value,
    accounts.value,
    innerTx.value,
  ));

  const direction = computed(() => innerTx.value?.function === TX_FUNCTIONS.claim
    ? TX_DIRECTION.received
    : getTxDirection.value(
      outerTx.value?.payerId ? outerTx.value : innerTx.value,
      externalAddress
        || (
          ownershipStatus.value !== TRANSACTION_OWNERSHIP_STATUS.current
          && txOwnerAddress.value
        ),
    ));

  function getOwnershipAccount(
    externalOwnerAddress: string | undefined,
  ): IAccountLabeled {
    switch (ownershipStatus.value) {
      case TRANSACTION_OWNERSHIP_STATUS.current:
        return {
          ...activeAccount.value,
          // @ts-ignore
          label: i18n.global.t('transaction.overview.accountAddress'),
          url: getExplorerPath.value(activeAccount.value.address),
        };
      case TRANSACTION_OWNERSHIP_STATUS.subAccount: {
        const { accountId, callerId } = innerTx.value || {};

        return accounts.value.find(({ address }) => [accountId, callerId].includes(address))!;
      }
      default: {
        const address = externalOwnerAddress || txOwnerAddress.value;

        return {
          name: getPreferred.value(address) || '',
          address,
        };
      }
    }
  }

  return {
    outerTxType,
    hasNestedTx,
    txType,
    innerTx: innerTx as any,
    isAllowance,
    isErrorTransaction,
    isDex,
    isMultisig,
    direction,
    getOwnershipAccount,
    setTransactionTx,
    setExternalAddress,
  };
}
