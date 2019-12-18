import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routeList from './routeList'
import menuList from '@/menuList'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routeList
})

// loading bar
router.beforeEach((to, from, next) => {
  console.log('loading bar')
  if (to.meta && to.meta.loading) {
    store.commit('setLoading', true)
  }
  next()
})

// check authentication
router.beforeEach((to, from, next) => {
  console.log('check authentication')
  let permitAll = false
  if (to.meta && to.meta.permitAll) {
    permitAll = to.meta.permitAll
  }
  console.log(permitAll)
  if (permitAll) {
    next()
    return
  }

  Vue.prototype.$firebase.auth().onAuthStateChanged(async (user) => {
    console.log('firebase.auth().onAuthStateChanged')

    if (!user) {
      store.commit('logout', '')
      next('/sign')
      return
    }

    store.commit('setUser', user)
    store.commit('setToken', await user.getIdToken())

    if (store.state.menuList && store.state.menuList.length > 0) {
      store.commit('setActiveMenu', to.path)
    } else {
      // todo
      setTimeout(() => {
        store.commit('setMenuList', menuList)

        // set active menu
        store.commit('setActiveMenu', to.path)
      }, 1000)
    }
    next()
  })
})

// set layout
router.beforeEach((to, from, next) => {
  console.log('set layout')
  if (to.meta && to.meta.layoutType) {
    store.commit('setLayoutType', to.meta.layoutType)
  } else {
    store.commit('setLayoutType', 'basic')
  }
  next()
})

// hide loading bar
router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

export default router
