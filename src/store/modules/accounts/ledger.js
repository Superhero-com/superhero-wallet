/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["state"] }] */

import TransportU2F from '@ledgerhq/hw-transport-u2f';
import Ae from '@aeternity/ledger-app-api';
import { decode } from '@aeternity/aepp-sdk/es/tx/builder/helpers';
import LedgerBridge from './ledger-bridge';

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
    ledgerAppApi: () => new Ae(new TransportU2F()),
    ledgerBridge: () => new LedgerBridge('https://wallet.superhero.com/ledger-bridge'),
  },

  actions: {
    async request({ getters: { ledgerAppApi, ledgerBridge }, dispatch }, { name, args }) {
      let result;
      let error;
      do {
        if (error) {
          // eslint-disable-next-line no-await-in-loop
          await dispatch('modals/open', { name: 'confirm', title: 'Try again' }, { root: true });
        }
        try {
          // eslint-disable-next-line no-await-in-loop
          result = await (process.env.IS_EXTENSION ? ledgerBridge : ledgerAppApi)[name](...args);
          error = false;
        } catch (err) {
          error = true;
        }
      } while (error);
      return result;
    },

    async create({ getters: { nextIdx }, commit, dispatch }) {
      let address;
      try {
        address = await dispatch('request', { name: 'getAddress', args: [nextIdx, true] });
        commit('accounts/add', {
          address, type: 'ledger', idx: nextIdx, color: '#000', shift: 0,
        }, { root: true });
      } catch (error) {
        dispatch('modals/open', { name: 'default', icon: 'alert', title: 'address not confirmed' }, { root: true });
      }
    },

    async ensureCurrentAccountAvailable({ rootGetters: { account }, dispatch }) {
      const address = await dispatch('request', { name: 'getAddress', args: [account.idx] });
      if (account.address !== address) {
        if (!process.env.IS_EXTENSION) {
          dispatch('modals/open', { name: 'dafault', icon: 'alert', title: 'account not found' }, { root: true });
        }
        throw new Error('Account not found');
      }
    },

    sign: () => Promise.reject(new Error('Not implemented yet')),

    async signTransaction({ rootGetters: { account }, dispatch, rootState }, { txBase64 }) {
      await dispatch('ensureCurrentAccountAvailable');

      const binaryTx = decode(txBase64, 'tx');
      const signature = Buffer.from(await dispatch('request', {
        name: 'signTransaction',
        args: [
          account.idx,
          binaryTx,
          rootState.sdk.getNetworkId(),
        ],
      }), 'hex');
      return Crypto.encodeTx(Crypto.prepareTx(signature, binaryTx));
    },
  },
};
