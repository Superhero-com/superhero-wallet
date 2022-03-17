import Vue from 'vue';
import Vuex from 'vuex';
import persistState from '../store/plugins/persistState';
import permissions from '../store/modules/permissions';
import accounts from '../store/modules/accounts';
import getters from '../store/getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [persistState()],
  modules: { permissions, accounts },
  getters: {
    'names/getDefault': () => (address) => `placeholder name for ${address}`,
    wallet: getters.wallet,
    accounts: getters.accounts,
    account: getters.account,
    isLoggedIn: getters.isLoggedIn,
    networks: getters.networks,
    activeNetwork: getters.activeNetwork,
  },
  actions: {
    async ensureRestored() {
      // eslint-disable-next-line no-underscore-dangle
      await store._watcherVM.$watchUntilTruly(() => store.state.isRestored);
    },
  },
});

export default store;
