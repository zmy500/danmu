import Vue from 'vue'
import App from './App.vue'
import router from './router'

import iView from 'iview'// 导入组件库
import 'iview/dist/styles/iview.css'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
Vue.prototype.$axios = axios;


import { vueBaberrage } from 'vue-baberrage'
Vue.use(vueBaberrage)

Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
