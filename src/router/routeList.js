
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { permitAll: false, layoutType: 'basic', loading: true }
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/views/sign.vue'),
    meta: { permitAll: true, layoutType: 'empty', loading: true }
  },
  {
    path: '/myinfo',
    component: () =>
              import('@/views/Myinfo.vue')
  },
  {
    path: '/code/list',
    component: () =>
            import('@/views/code/list.vue')
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
