import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: localStorage.getItem("lang") || 'en'
  },
  mutations: {
    setLanguage(state: any, lang: any) {
      state.language = lang;
      localStorage.setItem("lang", lang);
    }
  },
  getters: {
    getLanguage: (state: any) => state.language
  },
  actions: {
  },
  modules: {
  }
})
