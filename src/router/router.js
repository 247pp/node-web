
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
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
  }
]
