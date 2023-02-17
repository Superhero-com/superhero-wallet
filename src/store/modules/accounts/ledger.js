/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["state"] }] */

import TransportWebUSB from '@ledgerhq/hw-transport-webusb';
import Ae from '@aeternity/ledger-app-api';
import { buildTx, unpackTx, Tag } from '@aeternity/aepp-sdk';
import { MODAL_DEFAULT } from '../../../popup/utils';

export default {
  namespaced: true,

  account: {
    type: 'ledger',
  },

  getters: {
    nextIdx: (state, getters, rootState, rootGetters) => Math.max(
      ...rootGetters['accounts/getByType']('ledger').map(({ idx }) => idx),
      -1,
    ) + 1,
  },

  actions: {
    async request({ dispatch }, { name, args }) {
      let result;
      let error;
      const transport = await TransportWebUSB.create();
      const ledgerAppApi = new Ae(transport);
      try {
        do {
          if (error) {
            // eslint-disable-next-line no-await-in-loop
            await dispatch('modals/open', { name: 'confirm', title: 'Try again' }, { root: true });
          }
          try {
            // eslint-disable-next-line no-await-in-loop
            result = await ledgerAppApi[name](...args);
            error = false;
          } catch (err) {
            error = true;
          }
        } while (error);
      } finally {
        await transport.close();
      }
      return result;
    },

    async create({ getters: { nextIdx }, commit, dispatch }) {
      let address;
      try {
        address = await dispatch('request', { name: 'getAddress', args: [nextIdx, true] });
        commit('accounts/add', { address, type: 'ledger', idx: nextIdx }, { root: true });
      } catch (error) {
        dispatch('modals/open', { name: MODAL_DEFAULT, icon: 'alert', title: 'address not confirmed' }, { root: true });
      }
    },

    async ensureCurrentAccountAvailable({ rootGetters: { account }, dispatch }) {
      const address = await dispatch('request', { name: 'getAddress', args: [account.idx] });
      if (account.address !== address) {
        if (!process.env.IS_EXTENSION) {
          dispatch('modals/open', { name: MODAL_DEFAULT, icon: 'alert', title: 'account not found' }, { root: true });
        }
        throw new Error('Account not found');
      }
    },

    sign: () => Promise.reject(new Error('Not implemented yet')),

    async signTransaction({ rootGetters: { account, 'sdkPlugin/sdk': sdk }, dispatch }, { txBase64 }) {
      await dispatch('ensureCurrentAccountAvailable');

      const txObject = unpackTx(txBase64);
      const encodedTx = buildTx(
        txObject,
        Tag[txObject.tag],
        { vsn: txObject.VSN },
      ).rlpEncoded;

      const signature = Buffer.from(await dispatch('request', {
        name: 'signTransaction',
        args: [
          account.idx,
          encodedTx,
          await sdk.getNetworkId(),
        ],
      }), 'hex');

      return buildTx({ tag: Tag.SignedTx, encodedTx, signatures: [signature] });
    },
  },
};
