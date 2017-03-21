import Vue from 'vue'
import Router from 'vue-router'
import Home from 'doc/views/Home'

import Button from 'doc/views/Button'
import Grid from 'doc/views/Grid'
import Radio from 'doc/views/Radio'
import Checkbox from 'doc/views/Checkbox'
import Input from 'doc/views/Input'
import Select from 'doc/views/Select'
import DatePicker from 'doc/views/DatePicker'

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
    }, {
      path: '/input',
      name: 'Input',
      component: Input
    }, {
      path: '/select',
      name: 'Select',
      component: Select
    }, {
      path: '/datepicker',
      name: 'DatePicker',
      component: DatePicker
    }
  ]
})
