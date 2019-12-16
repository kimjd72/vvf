import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/sign',
  name: 'sign',
  component: () =>
            import('../views/sign.vue'),
  meta: { permitAll: true }
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
            import('../views/lectures/vuex')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('router.beforeEach')
  const permitAll = to.matched.some(record => record.meta.permitAll)
  console.log(to)
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

router.afterEach((to, from) => {
  console.log(router.afterEach)
})

export default router
