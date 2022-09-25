import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_key: '208a23c3738402ec171b42b98aa0f284',
    api_base: 'https://api.openweathermap.org/data/2.5/',
    location: '',
    weekday: '',
    weather: {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
