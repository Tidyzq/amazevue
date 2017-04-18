import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

import Button from '../views/Button'
import Grid from '../views/Grid'
import Radio from '../views/Radio'
import Checkbox from '../views/Checkbox'
import Input from '../views/Input'
import InputMultiple from '../views/InputMultiple'
import Select from '../views/Select'
import DatePicker from '../views/DatePicker'
import FileSelect from '../views/FileSelect'
import Form from '../views/Form'
import Pagination from '../views/Pagination'
import Table from '../views/Table'
import Modal from '../views/Modal'
import Tab from '../views/Tab'
import Collapse from '../views/Collapse'
import Loading from '../views/Loading'
import Alert from '../views/Alert'
import Message from '../views/Message'
import Topbar from '../views/Topbar'
import Nav from '../views/Nav'
import Dropdown from '../views/Dropdown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/amazevue',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/button',
      name: 'Button',
      component: Button,
    }, {
      path: '/grid',
      name: 'Grid',
      component: Grid,
    }, {
      path: '/radio',
      name: 'Radio',
      component: Radio,
    }, {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox,
    }, {
      path: '/input',
      name: 'Input',
      component: Input,
    }, {
      path: '/input-multiple',
      name: 'InputMultiple',
      component: InputMultiple,
    }, {
      path: '/select',
      name: 'Select',
      component: Select,
    }, {
      path: '/date-picker',
      name: 'DatePicker',
      component: DatePicker,
    }, {
      path: '/file-select',
      name: 'FileSelect',
      component: FileSelect,
    }, {
      path: '/form',
      name: 'Form',
      component: Form,
    }, {
      path: '/pagination',
      name: 'Pagination',
      component: Pagination,
    }, {
      path: '/table',
      name: 'Table',
      component: Table,
    }, {
      path: '/modal',
      name: 'Modal',
      component: Modal,
    }, {
      path: '/tab',
      name: 'Tab',
      component: Tab,
    }, {
      path: '/collapse',
      name: 'Collapse',
      component: Collapse,
    }, {
      path: '/loading',
      name: 'Loading',
      component: Loading,
    }, {
      path: '/alert',
      name: 'Alert',
      component: Alert,
    }, {
      path: '/message',
      name: 'Message',
      component: Message,
    }, {
      path: '/topbar',
      name: 'Topbar',
      component: Topbar,
    }, {
      path: '/nav',
      name: 'Nav',
      component: Nav,
    }, {
      path: '/dropdown',
      name: 'Dropdown',
      component: Dropdown,
    },
    { path: '*', redirect: '/' },
  ],
})
