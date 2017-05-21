// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'amazeui/dist/css/amazeui.css'
import 'module/amazevue.css'
import 'prismjs/themes/prism.css'
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

function resolve (l) {
  if (l.search) {
    const repo = l.pathname.split('/')[1]
    const searches = l.search.slice(1).split('&')
    const hash = l.hash

    const q = {}

    for (const search of searches) {
      const split = search.split('=')
      const key = split[0], val = split.slice(1).join('=').replace(/~and~/g, '&')

      q[key] = val
    }

    if (q.p) {
      const url = `/${repo}/${q.p}${q.q ? '?' + q.q : ''}${hash ? '#' + hash : ''}`
      window.history.replaceState(null, null, url)
    }
  }
}

resolve(window.location)

new Vue({
  el: '#app',
  router,
  store,
  render (h) { return h(App) },
})
