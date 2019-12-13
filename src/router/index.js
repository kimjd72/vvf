import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
            import('../views/sign.vue')
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
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
