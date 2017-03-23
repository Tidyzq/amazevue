import Vue from 'vue'
import Router from 'vue-router'
import Home from 'doc/views/Home'

import Button from 'doc/views/Button'
import Grid from 'doc/views/Grid'
import Radio from 'doc/views/Radio'
import Checkbox from 'doc/views/Checkbox'
import Input from 'doc/views/Input'
import InputMultiple from 'doc/views/InputMultiple'
import Select from 'doc/views/Select'
import DatePicker from 'doc/views/DatePicker'
import FileSelect from 'doc/views/FileSelect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/amazevue',
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
      path: '/input-multiple',
      name: 'InputMultiple',
      component: InputMultiple
    }, {
      path: '/select',
      name: 'Select',
      component: Select
    }, {
      path: '/date-picker',
      name: 'DatePicker',
      component: DatePicker
    }, {
      path: '/file-select',
      name: 'FileSelect',
      component: FileSelect
    },
    { path: '*', redirect: '/' }
  ]
})
