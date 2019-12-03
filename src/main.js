/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG

———————————————— */

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
import './components/windowcss/index.less'
import '@/styles/index.less'

// 引入iview组件库
Vue.use(iView)

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
