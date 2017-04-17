// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'amazeui/dist/css/amazeui.css'
import Amazevue from '../src'
import router from './router'

Vue.config.productionTip = false

Vue.use(Amazevue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
