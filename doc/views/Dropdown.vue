<template lang='jade'>
.dropdown-page.am-container
  h1 Dropdown
  h2 Basic
  am-button(type='primary', icon='caret-down', @click='dropdown1 = !dropdown1', :active='dropdown1') Toggle Dropdown
  am-dropdown(v-model='dropdown1')
    am-nav
      am-nav-item(index='1') 1
      am-nav-item(index='2') 2
      am-sub-nav
        template(slot='title') 3
        am-nav-item(index='3-1') 3-1
        am-nav-item(index='3-2') 3-2
  pre
    | am-button(type='primary', icon='caret-down', @click='dropdown1 = !dropdown1', :active='dropdown1') Toggle Dropdown
    | am-dropdown(v-model='dropdown1')
    |   am-nav
    |     am-nav-item(index='1') 1
    |     am-nav-item(index='2') 2
    |     am-sub-nav
    |       template(slot='title') 3
    |       am-nav-item(index='3-1') 3-1
    |       am-nav-item(index='3-2') 3-2
  h2 Drop Up
  am-dropdown(v-model='dropdown2', direction='up')
    am-nav
      am-nav-item(index='1') 1
      am-nav-item(index='2') 2
      am-sub-nav
        template(slot='title') 3
        am-nav-item(index='3-1') 3-1
        am-nav-item(index='3-2') 3-2
  am-button(type='warning', icon='caret-down', @click='dropdown2 = !dropdown2', :active='dropdown2') Toggle Dropup
  pre
    | am-dropdown(v-model='dropdown2', direction='up')
    |   am-nav
    |     am-nav-item(index='1') 1
    |     am-nav-item(index='2') 2
    |     am-sub-nav
    |       template(slot='title') 3
    |       am-nav-item(index='3-1') 3-1
    |       am-nav-item(index='3-2') 3-2
    | am-button(type='warning', icon='caret-down', @click='dropdown2 = !dropdown2', :active='dropdown2') Toggle Dropup
</template>

<script>
export default {
  data () {
    return {
      dropdown1: false,
      dropdown2: false,
    }
  },
}
</script>
