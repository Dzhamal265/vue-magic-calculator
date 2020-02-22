import Vue from 'vue'
import Vuex from 'vuex'

import { createVuexStore } from 'vuex-simple'

import { Store } from './store'

Vue.use(Vuex)


const store = new Store();

// create and export our store
export default createVuexStore(store, {
  strict: false,
  modules: {},
  plugins: []
});
 