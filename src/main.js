import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
import fastclick from 'fastclick'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.jpg')
})
Vue.prototype.$ajax = axios
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
