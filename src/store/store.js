import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keepAliveData: []
  },
  mutations: {
    SET_KEEP_ALIVE (state, req) {
      state.keepAliveData = req
    }
  },
  actions: {

  }
})
