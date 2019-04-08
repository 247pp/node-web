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
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
