import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  meta: { permitAll: false, layoutType: 'basic', loading: true }
},
{
  path: '/sign',
  name: 'sign',
  component: () => import('../views/sign.vue'),
  meta: { permitAll: true, layoutType: 'empty', loading: true }
},
{
  path: '/myinfo',
  component: () =>
            import('../views/Myinfo.vue')
},
{
  path: '/code/list',
  component: () =>
            import('../views/code/list.vue')
},
{
  path: '/lectures/card',
  component: () =>
            import('../views/lectures/card.vue')
},
{
  path: '/lectures/layout',
  component: () =>
            import('../views/lectures/layout.vue')
},
{
  path: '/lectures/notes',
  component: () =>
            import('../views/lectures/notes.vue')
},
{
  path: '/lectures/axios',
  component: () =>
            import('../views/lectures/axios.vue')
},
{
  path: '/lectures/mother',
  component: () =>
            import('../views/lectures/mother.vue')
},
{
  path: '/lectures/vuex',
  component: () =>
            import('../views/lectures/vuex.vue')
},
{
  path: '/lectures/progressbar',
  component: () =>
            import('../views/lectures/progressbar.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
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
  if (!permitAll) {
    Vue.prototype.$firebase.auth().onAuthStateChanged(async (user) => {
      console.log('firebase.auth().onAuthStateChanged')
      store.commit('setUser', user)
      if (user) {
        const token = await user.getIdToken()
        console.log('token', token)
        store.commit('setToken', token)
      } else {
        store.commit('setToken', '')
      }

      if (user) {
        next()
      } else {
        next('/sign')
      }
    })
  } else {
    next()
  }
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

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
  console.log('progressbar finished')
  store.commit('setLoading', false)
})

export default router
