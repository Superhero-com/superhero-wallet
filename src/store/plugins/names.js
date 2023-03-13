import Vue from 'vue';
import {
  AUTO_EXTEND_NAME_BLOCKS_INTERVAL,
  MODAL_DEFAULT,
  fetchJson,
  postJson,
  checkAddress,
  checkAensName,
  fetchAllPages,
  watchUntilTruthy,
  fetchRespondChallenge,
} from '../../popup/utils';
import { i18n } from './languages';
import { useMiddleware } from '../../composables';

export default (store) => {
  const {
    isMiddlewareReady,
    getMiddleware,
    fetchFromMiddlewareCamelCased,
  } = useMiddleware({ store });

  store.registerModule('names', {
    namespaced: true,
    state: {
      owned: [],
      defaults: {},
      preferred: {},
      auctions: {},
      pendingAutoExtendNames: [],
      areNamesFetching: false,
    },
    getters: {
      get: ({ owned }) => (name) => owned.find((n) => n.name === name),
      getDefault: ({ defaults }, getters, _, { activeNetwork }) => (address) => {
        const sdk = store.getters['sdkPlugin/sdk'];
        if (!defaults) return '';
        let { networkId } = activeNetwork;
        if (sdk) networkId = sdk.getNetworkId();
        return defaults[`${address}-${networkId}`];
      },
      getPreferred: (
        { preferred }, { getDefault }, _, { account, activeNetwork },
      ) => (address) => {
        if (account.address === address) return getDefault(address);
        store.dispatch('names/setPreferred', address);
        return preferred[`${address}-${activeNetwork.networkId}`] || '';
      },
      getName: ({ owned }) => (name) => owned.find((n) => n.name === name),
      getAuction: ({ auctions }) => (name) => auctions[name] || null,
      getHighestBid: (_, { getAuction }) => (name) => getAuction(name)
        && getAuction(name).bids.reduce((a, b) => (a.nameFee.isGreaterThan(b.nameFee) ? a : b)),
    },
    mutations: {
      setAreNamesFetching(state, payload) {
        state.areNamesFetching = payload;
      },
      set(state, names) {
        state.owned = names;
      },
      async setDefault({ defaults }, { address, name }) {
        const sdk = await watchUntilTruthy(() => store.getters['sdkPlugin/sdk']);
        const networkId = sdk.getNetworkId();
        if (name) Vue.set(defaults, `${address}-${networkId}`, name);
        else Vue.delete(defaults, `${address}-${networkId}`);
      },
      setAutoExtend(state, { name, value }) {
        const index = state.owned.findIndex((n) => n.name === name);
        Vue.set(state.owned[index], 'autoExtend', value);
      },
      setPreferred({ preferred }, { address, name }) {
        const networkId = store.getters['sdkPlugin/sdk'].getNetworkId();
        if (name) Vue.set(preferred, `${address}-${networkId}`, name);
        else Vue.delete(preferred, `${address}-${networkId}`);
      },
      setAuctionEntry(state, { name, expiration, bids }) {
        state.auctions[name] = { expiration, bids };
      },
      setPendingAutoExtendName(state, name) {
        state.pendingAutoExtendNames.push(name);
      },
    },
    actions: {
      async fetchOwned({
        state: { owned, pendingAutoExtendNames },
        rootGetters: { accounts },
        commit,
        dispatch,
      }) {
        commit('setAreNamesFetching', true);
        const getPendingNameClaimTransactions = (address) => dispatch('fetchPendingTransactions', address, { root: true })
          .then((transactions) => transactions
            .filter(({ tx: { type } }) => type === 'NameClaimTx')
            .map(({ tx, ...otherTx }) => ({
              ...otherTx,
              ...tx,
              owner: tx.accountId,
            })));

        const middleware = await getMiddleware();
        const names = await Promise.all(
          accounts.map(({ address }) => Promise.all([
            getPendingNameClaimTransactions(address),
            middleware.getNamesOwnedBy(address)
              .then(({ active }) => active.map(({ info, name, hash }) => ({
                createdAtHeight: info.activeFrom,
                expiresAt: info.expireHeight,
                owner: info.ownership.current,
                pointers: info.pointers,
                autoExtend: !!(
                  owned.find((n) => n.name === name)?.autoExtend
                  || pendingAutoExtendNames?.includes(name)
                ),
                name,
                hash,
              }))),
          ])),
        ).then((arr) => arr.flat(2));

        commit('set', names);
        commit('setAreNamesFetching', false);
      },
      async fetchAuctions() {
        const middleware = await getMiddleware();

        // TODO: Switch to onscroll loading after/while resolving https://github.com/aeternity/superhero-wallet/issues/1400
        return (
          await fetchAllPages(
            () => middleware.getAllAuctions({ by: 'expiration', direction: 'forward', limit: 100 }),
            fetchFromMiddlewareCamelCased,
          )
        ).map(({ name, info }) => ({
          name,
          expiration: info.auctionEnd,
          lastBid: info.lastBid.tx,
        }));
      },
      async updatePointer(
        { dispatch, rootGetters: { 'sdkPlugin/sdk': sdk } },
        { name, address, type = 'update' },
      ) {
        const nameEntry = await sdk.aensQuery(name);
        try {
          if (type === 'extend') {
            await nameEntry.extendTtl();
          } else if (type === 'update') {
            await sdk.aensUpdate(name, { account_pubkey: address }, { extendPointers: true });
          }
          dispatch(
            'modals/open',
            { name: MODAL_DEFAULT, msg: i18n.t('pages.names.pointer-added', { type }) },
            { root: true },
          );
        } catch (e) {
          dispatch('modals/open', { name: MODAL_DEFAULT, msg: e.message }, { root: true });
        }
      },
      async setDefaults(
        { rootGetters: { activeNetwork, accounts }, commit },
      ) {
        await Promise.all(accounts.map(async ({ address }) => {
          const response = await fetchJson(
            `${activeNetwork.backendUrl}/profile/${address}`,
          ).catch(() => {});
          commit('setDefault', { address, name: response?.preferredChainName });
        }));
      },
      async setDefault(
        { commit, rootGetters: { 'sdkPlugin/sdk': sdk, activeNetwork } },
        { name, address },
      ) {
        const response = await postJson(`${activeNetwork.backendUrl}/profile/${address}`, {
          body: {
            preferredChainName: name,
          },
        });

        const respondChallenge = await fetchRespondChallenge(sdk, response);

        await postJson(`${activeNetwork.backendUrl}/profile/${address}`, {
          body: respondChallenge,
        });
        commit('setDefault', { name, address });
      },
      async getAddress(context, id) {
        if (checkAddress(id)) return id;
        if (checkAensName(id)) {
          const middleware = await getMiddleware();
          const { info: nameEntry } = await middleware.getNameById(id);
          return nameEntry.pointers?.accountPubkey;
        }
        return '';
      },
      async setPreferred({
        rootState: { middleware },
        rootGetters: { activeNetwork },
        commit,
      }, address) {
        if (!middleware) return;
        const response = await fetchJson(`${activeNetwork.backendUrl}/profile/${address}`).catch(() => {});
        if (response?.preferredChainName) {
          commit('setPreferred', { address, name: response?.preferredChainName });
        } else {
          commit('setPreferred', { address });
        }
      },
    },
  });

  store.watch(
    ({ middleware }) => middleware,
    async (middleware) => {
      if (!middleware) return;

      await Promise.all([
        store.dispatch('names/fetchOwned').catch(() => {}),
        store.dispatch('names/setDefaults'),
      ]);

      const height = await (await watchUntilTruthy(() => store.getters['sdkPlugin/sdk'])).height();
      await Promise.all(
        store.state.names.owned
          .filter(({ autoExtend }) => autoExtend)
          .filter(({ expiresAt }) => expiresAt - height < AUTO_EXTEND_NAME_BLOCKS_INTERVAL)
          .map(({ name }) => store.dispatch('names/updatePointer', { name, type: 'extend' })),
      );
    },
    { immediate: true },
  );

  store.watch(
    ({ accounts: { hdWallet: { nextAccountIdx } } }) => nextAccountIdx,
    async () => {
      if (!isMiddlewareReady.value) {
        return;
      }
      await Promise.all([
        store.dispatch('names/fetchOwned').catch(() => {}),
        store.dispatch('names/setDefaults'),
      ]);
    },
  );
};
