// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from '@/http.js'
// import "@/assets/css/common.css"
import "@/assets/js/common.js"
import "@/assets/css/fonts/iconfont.css"
import "@/assets/css/swiper.min.css"
import "@/assets/js/swiper.min.js"

// import { PullRefresh,List} from 'vant';
// Vue.use(PullRefresh).use(List);

Vue.prototype.$http = axios

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})