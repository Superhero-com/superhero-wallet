import { computed } from 'vue';
import { Encoded } from '@aeternity/aepp-sdk-13';
import { isEmpty, mapValues } from 'lodash-es';
import BigNumber from 'bignumber.js';
import type {
  Balance,
  BalanceRaw,
  ICoin,
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
import { useCurrencies } from './currencies';
import { useAccounts } from './accounts';
import { useSdk13 } from './sdk13';

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
  const { getSdk } = useSdk13({ store });
  const { aeternityData } = useCurrencies();
  const { activeAccount, accounts } = useAccounts({ store });

  const balances = useStorageRef(store);

  const balance = computed(() => balances.value[activeAccount.value.address] || new BigNumber(0));
  const balancesTotal = computed(
    () => Object.keys(balances.value)
      .reduce((total, key) => total.plus(balances.value[key]), new BigNumber(0))
      .toFixed(),
  );

  const aeternityCoin = computed((): ICoin => ({
    ...aeternityData.value!,
    contractId: AETERNITY_CONTRACT_ID,
    convertedBalance: +balance.value,
    symbol: AETERNITY_SYMBOL,
  }));

  function getAccountBalance(address: string) {
    return balances.value[address] || new BigNumber(0);
  }

  async function updateBalances() {
    const sdk = await getSdk();
    const balancesPromises = accounts.value.map(
      // TODO - type address in IAccount interface
      ({ address }) => sdk.getBalance(address as Encoded.AccountAddress).catch((error) => {
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

  onNetworkChange(store, () => {
    if (isEmpty(balances.value)) {
      updateBalances();
    }
  });

  initPollingWatcher(() => updateBalances());

  return {
    aeternityCoin,
    balances,
    balancesTotal,
    balance,
    getAccountBalance,
    updateBalances,
  };
}
