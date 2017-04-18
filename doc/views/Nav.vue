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
  pre
    | am-nav(v-model='nav1')
    |   am-nav-item(index='1') 1
    |   am-nav-item(index='2') 2
    |   am-sub-nav
    |     template(slot='title') 3
    |     am-nav-item(index='3-1', default-active) 3-1
    |     am-nav-item(index='3-2') 3-2
    |     am-sub-nav
    |       template(slot='title') 3-3
    |       am-nav-item(index='3-3-1') 3-3-1
    |       am-nav-item(index='3-3-2') 3-3-2
    |   am-nav-item(index='4') 4
  h2 Icon
  am-nav(v-model='nav2')
    am-nav-item(index='1', icon='dashboard') 1
    am-nav-item(index='2', icon='users') 2
    am-sub-nav(icon='folder')
      template(slot='title') 3
      am-nav-item(index='3-1', icon='file', default-active) 3-1
      am-nav-item(index='3-2', icon='file') 3-2
      am-sub-nav(icon='folder')
        template(slot='title') 3-3
        am-nav-item(index='3-3-1', icon='file') 3-3-1
        am-nav-item(index='3-3-2', icon='file') 3-3-2
    am-nav-item(index='4', icon='shopping-bag') 4
  pre
    | am-nav(v-model='nav2')
    |   am-nav-item(index='1', icon='dashboard') 1
    |   am-nav-item(index='2', icon='users') 2
    |   am-sub-nav(icon='folder')
    |     template(slot='title') 3
    |     am-nav-item(index='3-1', icon='file', default-active) 3-1
    |     am-nav-item(index='3-2', icon='file') 3-2
    |     am-sub-nav(icon='folder')
    |       template(slot='title') 3-3
    |       am-nav-item(index='3-3-1', icon='file') 3-3-1
    |       am-nav-item(index='3-3-2', icon='file') 3-3-2
    |   am-nav-item(index='4', icon='shopping-bag') 4
  h2 Pills
  am-nav(v-model='nav3', mode='pills')
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
  pre
    | am-nav(v-model='nav3', mode='pills')
    |   am-nav-item(index='1') 1
    |   am-nav-item(index='2') 2
    |   am-sub-nav
    |     template(slot='title') 3
    |     am-nav-item(index='3-1', default-active) 3-1
    |     am-nav-item(index='3-2') 3-2
    |     am-sub-nav
    |       template(slot='title') 3-3
    |       am-nav-item(index='3-3-1') 3-3-1
    |       am-nav-item(index='3-3-2') 3-3-2
    |   am-nav-item(index='4') 4
  h2 Tabs
  am-nav(v-model='nav4', mode='tabs')
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
  pre
    | am-nav(v-model='nav4', mode='tabs')
    |   am-nav-item(index='1') 1
    |   am-nav-item(index='2') 2
    |   am-sub-nav
    |     template(slot='title') 3
    |     am-nav-item(index='3-1', default-active) 3-1
    |     am-nav-item(index='3-2') 3-2
    |     am-sub-nav
    |       template(slot='title') 3-3
    |       am-nav-item(index='3-3-1') 3-3-1
    |       am-nav-item(index='3-3-2') 3-3-2
    |   am-nav-item(index='4') 4
</template>

<script>
export default {
  data () {
    return {
      nav1: '',
      nav2: '',
      nav3: '',
      nav4: '',
    }
  },
}
</script>
