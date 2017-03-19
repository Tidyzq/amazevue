import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

import Button from '@/views/Button'
import Grid from '@/views/Grid'
import Radio from '@/views/Radio'
import Checkbox from '@/views/Checkbox'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/button',
      name: 'Button',
      component: Button
    }, {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }, {
      path: '/radio',
      name: 'Radio',
      component: Radio
    }, {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    }
  ]
})
