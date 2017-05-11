import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    navigation: '',
  },
  mutations: {
    UPDATE_NAVIGATION (state, navigation) {
      state.navigation = navigation
    },
  },
  actions,
  getters,
  strict: debug,
})
