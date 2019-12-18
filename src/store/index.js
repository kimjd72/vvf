import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'GalleryHyundai CMS',
    user: null,
    token: '',
    layoutType: 'empty',
    loading: false,
    menuList: [],
    selectedMenu: null
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
    },
    setLayoutType (state, layoutType) {
      state.layoutType = layoutType
    },
    setLoading (state, loading) {
      state.loading = loading
    },
    setMenuList (state, menuList) {
      state.menuList = menuList
    },
    logout (state, payload) {
      state.title = 'GalleryHyundai CMS'
      state.user = null
      state.token = ''
      state.layoutType = 'empty'
      state.loading = false
      state.menuList = []
      state.selectedMenu = null
    },
    setActiveMenu (state, path) {
      // check 1st depth
      let selectedMenu = null
      state.menuList.some((menu) => {
        if (menu.to === path) {
          menu.active = true
          selectedMenu = menu
          return true
        }

        // check 2nd depth
        menu.subItems.some((sub, index) => {
          if (sub.to === path) {
            sub.active = true
            selectedMenu = sub
            return true
          }
        })

        if (selectedMenu) {
          return true
        }
      })
      state.selectedMenu = selectedMenu
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
  modules: {}
})
