import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'GalleryHyundai CMS',
    user: null,
    token: ''
  },
  mutations: {
    setTitle (state, title) {
      state.title = title
    },
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    getUser ({ commit }, user) {
      commit('setUser', user)
      if (!user) {
        return
      }
      user.getIdToken().then(token => {
        commit('setToken', token)
      })
    }
  },
  modules: {
  }
})
