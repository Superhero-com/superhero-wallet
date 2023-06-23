import {
  AensName,
  AeSdkWallet,
  sendTransaction,
  spend,
} from '@aeternity/aepp-sdk-13';
import { Encoded } from '@aeternity/aepp-sdk-13/src/utils/encoder';
import { Store } from 'vuex';
import { useAccounts } from '../composables/accounts';
import { AccountSuperhero } from './accounts/superhero';

/**
 * Custom fields in options, `modal` and `payload` for spend function.
 * `modal` is true when user consent popup modal is required
 * `payload` support payload along with the transaction
 */
type ISpendOptions = Omit<Parameters<typeof spend>[2], 'onAccount' | 'onNode'>
  & {
    modal?: boolean,
    payload?: Encoded.Any,
  }

export class ShSdkWallet extends AeSdkWallet {
  store: Store<any>;

  constructor(store: Store<any>, opt: any) {
    super(opt);
    this.store = store;
  }

  _resolveAccount() {
    return new AccountSuperhero(this.store);
  }

  getAccounts() {
    const { activeAccount, accounts } = useAccounts({ store: this.store });
    return ({
      current: { [activeAccount.value.address]: {} },
      connected: {
        ...accounts.value
          .reduce((acc, { address }) => ({
            ...acc, ...address !== activeAccount.value.address ? { [address]: {} } : {},
          })),
      },
    });
  }

  addresses() {
    const { accountsAddressList } = useAccounts({ store: this.store });
    return accountsAddressList.value as Encoded.AccountAddress[];
  }

  spendWithCustomOptions(
    amount: string | number,
    recipientId: Encoded.AccountAddress | AensName,
    options: ISpendOptions,
  ): ReturnType<typeof sendTransaction> {
    return super.spend(amount, recipientId, options as any); // TODO: remove type casting once https://github.com/aeternity/aepp-sdk-js/issues/1791 is resolved
  }
}
