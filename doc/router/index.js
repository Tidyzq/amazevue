import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './config'

Vue.use(Router)

const load = path => {
  return r => require.ensure([], require =>
    r(require(`@/docs/${path}.md`))
  )
}

const routes = []

function getRoutes (configs) {
  for (const config of configs) {
    if (config.path) {
      routes.push({
        path: config.path,
        name: config.name,
        component: load(config.file),
      })
    } else if (config.children) {
      getRoutes(config.children)
    }
  }
}

getRoutes(RouterConfig)

routes.push(
  { path: '*', redirect: '/grid' }
)

export default new Router({
  mode: 'history',
  // base: '/amazevue',
  routes,
})
