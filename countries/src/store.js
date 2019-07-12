import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    info: ''
  },
  mutations: {
    SET_INFO (state, info) {
      state.info = info
    }
  },
  actions: {
    loadInfo ({ commit }, param) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${param}`)
        .then(response => response.data[0])
        .then(info => {
          commit('SET_INFO', info)
        })
    }
  }
})
