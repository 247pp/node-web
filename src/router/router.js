import layout from '@/layout/layout.vue'

export default [
  {
    path: '/',
    name: 'login',
    meta: {
      auth: true
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: layout,
    redirect: '/test/test-list',
    children: [
      {
        path: 'test-list',
        name: 'list-page-test-list',
        component: () => import('@/views/list-page/test-list.vue')
      },
      {
        path: 'test-list2',
        name: 'list-page-test-list2',
        component: () => import('@/views/list-page/test-list2.vue')
      },
      {
        path: 'list-detail',
        name: 'list-page-list-detail',
        component: () => import('@/views/list-page/list-detail.vue')
      },
      {
        path: 'list2-detail',
        name: 'list-page-list2-detail',
        component: () => import('@/views/list-page/list2-detail.vue')
      }
    ]
  },
  {
    path: '/*',
    component: () => import('@/views/error.vue')
  }
]
