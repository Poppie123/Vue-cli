// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/http.js';
import '@/assets/js/until.js'
import 'swiper/dist/css/swiper.css';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.config.productionTip = false
Vue.use(MuseUI);

Vue.prototype.$http = axios;

//引入mock.js
// require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App},
  template: '<App/>'
})
