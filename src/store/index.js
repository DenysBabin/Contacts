import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    setAudio(state, audio) {
      state.audio = audio;
    },
  },
  actions: {
  },
  modules: {
  }
})
