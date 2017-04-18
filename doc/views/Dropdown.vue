<template lang='jade'>
.dropdown-page.am-container
  h1 Dropdown
  h2 Basic
  am-button(type='primary', icon='caret-down', @click='dropdown1 = !dropdown1', :active='dropdown1') Toggle Dropdown
  am-dropdown(v-model='dropdown1', content-tag='ul')
    am-nav
      am-nav-item(index='1') 1
      am-nav-item(index='2') 2
      am-sub-nav
        template(slot='title') 3
        am-nav-item(index='3-1') 3-1
        am-nav-item(index='3-2') 3-2
</template>

<script>
export default {
  data () {
    return {
      dropdown1: false,
    }
  },
}
</script>
