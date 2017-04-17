<template lang='jade'>
.nav-page.am-container
  h1 Nav
  h2 Basic
  am-nav(v-model='nav1')
    am-nav-item(index='1') 1
    am-nav-item(index='2') 2
    am-sub-nav
      template(slot='title') 3
      am-nav-item(index='3-1', default-active) 3-1
      am-nav-item(index='3-2') 3-2
      am-sub-nav
        template(slot='title') 3-3
        am-nav-item(index='3-3-1') 3-3-1
        am-nav-item(index='3-3-2') 3-3-2
    am-nav-item(index='4') 4
</template>

<script>
export default {
  data () {
    return {
      nav1: '',
    }
  },
}
</script>
