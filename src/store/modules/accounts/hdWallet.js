import { Crypto, TxBuilder, SCHEMA } from '@aeternity/aepp-sdk';
import { decode } from '@aeternity/aepp-sdk/es/tx/builder/helpers';
import {
  ACCOUNT_HD_WALLET,
  MODAL_CONFIRM_RAW_SIGN,
  MODAL_CONFIRM_TRANSACTION_SIGN,
  getHdWalletAccount,
  isTxOfASupportedType,
} from '../../../popup/utils';

export default {
  namespaced: true,

  account: {
    type: ACCOUNT_HD_WALLET,
  },

  state: {
    nextAccountIdx: 1,
  },
  actions: {
    async isAccountUsed({ rootGetters }, address) {
      return rootGetters['sdkPlugin/sdk'].api.getAccountByPubkey(address).then(() => true, () => false);
    },
    async discover({ state, rootGetters, dispatch }) {
      let lastNotEmptyIdx = 0;
      let account;
      // eslint-disable-next-line no-plusplus
      for (let nextIdx = state.nextAccountIdx; nextIdx <= 5; nextIdx++) {
        account = getHdWalletAccount(rootGetters.wallet, nextIdx);
        // eslint-disable-next-line no-await-in-loop
        if (await dispatch('isAccountUsed', account.address)) lastNotEmptyIdx = nextIdx;
      }
      // eslint-disable-next-line no-plusplus
      for (let i = state.nextAccountIdx; i <= lastNotEmptyIdx; i++) {
        dispatch('create', true);
      }
    },
    create({ state, commit }, isRestored = false) {
      commit(
        'accounts/add',
        { idx: state.nextAccountIdx, type: ACCOUNT_HD_WALLET, isRestored },
        { root: true },
      );
      state.nextAccountIdx += 1;
    },
    signWithoutConfirmation({ rootGetters: { accounts, account } }, { data, opt }) {
      const { secretKey } = opt && opt.fromAccount
        ? accounts.find(({ address }) => address === opt.fromAccount)
        : account;
      return Crypto.sign(data, secretKey);
    },
    async confirmRawDataSigning({ dispatch }, { data, app }) {
      await dispatch('modals/open', { name: MODAL_CONFIRM_RAW_SIGN, data, app }, { root: true });
    },
    async confirmTxSigning({ dispatch }, { encodedTx, app }) {
      if (!isTxOfASupportedType(encodedTx)) {
        await dispatch('confirmRawDataSigning', { data: encodedTx, app });
        return;
      }
      const txObject = TxBuilder.unpackTx(encodedTx, true).tx;

      const checkTransactionSignPermission = await dispatch('permissions/checkTransactionSignPermission', {
        ...txObject,
        host: app?.host || null,
      }, { root: true });

      if (!checkTransactionSignPermission) {
        await dispatch(
          'modals/open',
          { name: MODAL_CONFIRM_TRANSACTION_SIGN, transaction: txObject },
          { root: true },
        );
      }
    },
    sign({ dispatch }, data) {
      return dispatch('signWithoutConfirmation', { data });
    },
    async signTransaction({ dispatch, rootGetters }, {
      txBase64,
      opt: { modal = true, app = null },
    }) {
      const sdk = rootGetters['sdkPlugin/sdk'];
      const encodedTx = decode(txBase64, 'tx');
      if (modal) {
        await dispatch('confirmTxSigning', { encodedTx, app });
      }
      const signature = await dispatch(
        'signWithoutConfirmation',
        { data: Buffer.concat([Buffer.from(sdk.getNetworkId()), Buffer.from(encodedTx)]) },
      );
      return TxBuilder.buildTx({ encodedTx, signatures: [signature] }, SCHEMA.TX_TYPE.signed).tx;
    },
    async signTransactionFromAccount({ dispatch, rootGetters }, {
      txBase64,
      opt: { modal = true, app = null, fromAccount },
    }) {
      const sdk = rootGetters['sdkPlugin/sdk'];
      const encodedTx = decode(txBase64, 'tx');
      if (modal) {
        await dispatch('confirmTxSigning', { encodedTx, app });
      }
      const signature = await dispatch(
        'signWithoutConfirmation',
        {
          data: Buffer.concat([Buffer.from(sdk.getNetworkId()), Buffer.from(encodedTx)]),
          opt: { fromAccount },
        },
      );
      return TxBuilder.buildTx({ encodedTx, signatures: [signature] }, SCHEMA.TX_TYPE.signed).tx;
    },
  },
};
