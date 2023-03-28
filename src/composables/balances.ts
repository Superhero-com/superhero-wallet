import { computed } from '@vue/composition-api';
import { mapValues } from 'lodash-es';
import BigNumber from 'bignumber.js';
import type {
  Balance,
  BalanceRaw,
  IAsset,
  IDefaultComposableOptions,
} from '../types';
import {
  AETERNITY_SYMBOL,
  AETERNITY_CONTRACT_ID,
  aettosToAe,
  isNotFoundError,
  handleUnknownError,
} from '../popup/utils';
import {
  createNetworkWatcher,
  createPollingBasedOnMountedComponents,
  createStorageRef,
} from './composablesHelpers';
import { useSdk } from './sdk';
import { useCurrencies } from './currencies';
import { useAccounts } from './accounts';

type Balances = Record<string, Balance>;

const POLLING_INTERVAL = 3000;
const LOCAL_STORAGE_BALANCES_KEY = 'balances';

const initPollingWatcher = createPollingBasedOnMountedComponents(POLLING_INTERVAL);
const { onNetworkChange } = createNetworkWatcher();
const { useStorageRef } = createStorageRef<Balances>({}, LOCAL_STORAGE_BALANCES_KEY, {
  scopedToNetwork: true,
  serializer: {
    read: (val) => mapValues(val, (balance: BalanceRaw) => new BigNumber(balance)),
    write: (val) => mapValues(val, (balance) => balance.toFixed()),
  },
});

/**
 * This composable detects if any app components requires balances data and polls the API
 * to live update the values. If no components are using it the polling stops.
 */
export function useBalances({ store }: IDefaultComposableOptions) {
  const { getSdk } = useSdk({ store });
  const { currentCurrencyRate, aeternityData } = useCurrencies();
  const { activeAccount, accounts } = useAccounts({ store });

  const balances = useStorageRef(store);

  const balance = computed(() => balances.value[activeAccount.value.address] || new BigNumber(0));
  const balanceCurrency = computed(() => balance.value.toNumber() * currentCurrencyRate.value);
  const balancesTotal = computed(
    () => Object.keys(balances.value)
      .reduce((total, key) => total.plus(balances.value[key]), new BigNumber(0))
      .toFixed(),
  );

  const aeternityToken = computed((): IAsset => ({
    ...aeternityData.value,
    convertedBalance: balance.value,
    symbol: AETERNITY_SYMBOL,
    balanceCurrency: balanceCurrency.value,
    contractId: AETERNITY_CONTRACT_ID,
  }) as IAsset);

  function getAccountBalance(address: string) {
    return balances.value[address] || new BigNumber(0);
  }

  async function updateBalances() {
    const sdk = await getSdk();
    const balancesPromises = accounts.value.map(
      ({ address }) => sdk.balance(address).catch((error) => {
        if (!isNotFoundError(error)) {
          handleUnknownError(error);
        }
        return 0;
      }),
    );
    const balancesAettos = await Promise.all(balancesPromises);

    balances.value = balancesAettos.reduce(
      (acc, val, index) => ({
        ...acc,
        [accounts.value[index].address]: new BigNumber(aettosToAe(val)),
      }),
      {},
    );
  }

  onNetworkChange(store, () => updateBalances());

  initPollingWatcher(() => updateBalances());

  return {
    aeternityToken,
    balances,
    balancesTotal,
    balance,
    balanceCurrency,
    getAccountBalance,
    updateBalances,
  };
}
