// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'amazeui/dist/css/amazeui.css'
import 'module/amazevue.css'
import Amazevue from 'module/amazevue'
import router from './router'
import store from './store'
import Sidebar from './components/Sidebar'
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'

Vue.config.productionTip = false

Vue.use(Amazevue)
Vue.component(Sidebar.name, Sidebar)
Vue.component(MainHeader.name, MainHeader)
Vue.component(MainFooter.name, MainFooter)

const root = new Vue({
  // el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app')
  window.readyToCapture = true
  document.dispatchEvent(new Event('vue-post-render'))
})
