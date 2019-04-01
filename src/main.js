import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import axios from 'axios'
import functions from '@/libs/functions'

// 注册全局方法
Vue.use(functions)

Vue.config.productionTip = false

// 全局使用axios
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
