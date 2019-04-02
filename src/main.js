import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import axios from 'axios'
import functions from '@/libs/functions'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/libs/api.style.less'
import './index.less'

// 注册全局方法
Vue.use(functions)
// 引入iview组件库
Vue.use(iView)

Vue.config.productionTip = false

// 全局使用axios
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
