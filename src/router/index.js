import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import iView from 'iview'

Vue.use(Router)
// Vue.use(iView)
const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(iView)
  iView.LoadingBar.start()
  if (to.path !== '/') {
    if (!sessionStorage.login) {
      next({ replace: true, login: 'name' })
    } else {
      next()
    }
  } else {
    if (sessionStorage.login) {
      next({ path: '/home' })
      iView.LoadingBar.finish()
      console.log('已登录')
    } else {
      next()
    }
  }
  console.log(to, from, '路由守卫')
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
