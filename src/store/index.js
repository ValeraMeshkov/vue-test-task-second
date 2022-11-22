import { createStore } from 'vuex';

import tickets from '@/store/tickets/index';

import state from './state';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  namespaced: true,
  state,
  mutations,
  actions,
  modules: {
    tickets,
  },
});
