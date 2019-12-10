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
  path: '/myinfo',
  component: () =>
            import('../views/Myinfo.vue')
},
{
  path: '/code/list',
  component: () =>
            import('../views/code/list.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
