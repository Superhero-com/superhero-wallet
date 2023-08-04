import { computed } from 'vue';
import { Encoded } from '@aeternity/aepp-sdk';
import type {
  IAccount,
  IAccountOverview,
  IDefaultComposableOptions,
  IFormSelectOption,
  INetwork,
} from '@/types';
import { tg } from '@/store/plugins/languages';
import { PROTOCOL_AETERNITY, PROTOCOL_BITCOIN } from '@/constants';
import { getAccountNameToDisplay } from '@/popup/utils';
import { STUB_ACCOUNT } from '@/constants/stubs';
import { AE_FAUCET_URL } from '@/protocols/aeternity/config';
import { buildSimplexLink } from '@/protocols/aeternity/helpers';
import { AeScan } from '@/protocols/aeternity/libs/AeScan';

export function useAccounts({ store }: IDefaultComposableOptions) {
  // TODO in the future the state of the accounts should be stored in this composable
  const activeIdx = computed((): number => store.state.accounts?.activeIdx || 0);
  const accounts = computed((): IAccount[] => {
    const baseAccounts: IAccount[] = (store.getters.accounts || []).map((acc: IAccount) => ({
      ...acc,
      protocol: PROTOCOL_AETERNITY,
    }));

    /**
     * For the purpose of multichain Vue components architecture testing
     * we add this dummy BTC account.
     * TODO remove when PoC is approved
     */
    if (baseAccounts.length) {
      baseAccounts.push({
        idx: baseAccounts.length,
        address: STUB_ACCOUNT.address,
        protocol: PROTOCOL_BITCOIN,
        publicKey: new Uint8Array(),
        secretKey: new Uint8Array(),
        showed: true,
        type: '',
      });
    }
    return baseAccounts;
  });
  const accountsAddressList = computed(() => accounts.value.map((acc) => acc.address));
  const activeAccount = computed((): IAccount => accounts.value[activeIdx.value] || {});
  const isLoggedIn = computed(
    () => activeAccount.value && Object.keys(activeAccount.value).length > 0,
  );
  const activeNetwork = computed<INetwork>(() => store.getters.activeNetwork);

  /**
   * Accounts data formatted as the form select options
   */
  function prepareAccountSelectOptions(accountList: IAccount[]): IFormSelectOption[] {
    return accountList.map((acc) => ({
      text: getAccountNameToDisplay(acc),
      value: acc.address,
      address: acc.address,
      name: acc.name,
      idx: acc.idx,
    }));
  }

  const activeAccountExtended = computed((): IAccountOverview => ({
    ...activeAccount.value,
    label: tg('transaction.overview.accountAddress'),
    url: (new AeScan(activeNetwork.value.explorerUrl))
      .prepareUrlForAccount(activeAccount.value.address),
  }));

  const accountsSelectOptions = computed(() => prepareAccountSelectOptions(accounts.value));

  const activeAccountSimplexLink = computed(() => buildSimplexLink(activeAccount.value.address));

  const activeAccountFaucetUrl = computed(() => `${AE_FAUCET_URL}?address=${activeAccount.value.address}`);

  function getAccountByAddress(address: Encoded.AccountAddress): IAccount | undefined {
    return accounts.value.find((acc) => acc.address === address);
  }

  function setActiveAccountByIdx(idx: number = 0) {
    // TODO replace with updating local state after removing the Vuex
    store.commit('accounts/setActiveIdx', +(accounts.value[idx].idx || 0));
  }

  function setActiveAccountByAddress(address?: Encoded.AccountAddress) {
    if (address) {
      setActiveAccountByIdx(getAccountByAddress(address)?.idx);
    }
  }

  /**
   * Determine if provided address belongs to any of the current user's accounts.
   */
  function isLocalAccountAddress(address: Encoded.AccountAddress): boolean {
    return accountsAddressList.value.includes(address);
  }

  return {
    accounts,
    accountsAddressList,
    accountsSelectOptions,
    activeAccount,
    activeAccountExtended,
    activeAccountSimplexLink,
    activeAccountFaucetUrl,
    activeIdx,
    isLoggedIn,
    prepareAccountSelectOptions,
    isLocalAccountAddress,
    getAccountByAddress,
    setActiveAccountByAddress,
    setActiveAccountByIdx,
  };
}
