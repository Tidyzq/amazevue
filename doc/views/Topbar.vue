<template lang='jade'>
.topbar-page.am-container
  h1 Topbar
  h2 Basic
  am-topbar
    h1.am-topbar-brand(slot='brand')
      a(href='/') Amazevue
    am-nav.am-topbar-nav(mode='pills', v-model='nav1')
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
    | am-topbar
    |   h1.am-topbar-brand(slot='brand')
    |     a(href='/') Amazevue
    |   am-nav.am-topbar-nav(mode='pills', v-model='nav1')
    |     am-nav-item(index='1') 1
    |     am-nav-item(index='2') 2
    |     am-sub-nav
    |       template(slot='title') 3
    |       am-nav-item(index='3-1', default-active) 3-1
    |       am-nav-item(index='3-2') 3-2
    |       am-sub-nav
    |         template(slot='title') 3-3
    |         am-nav-item(index='3-3-1') 3-3-1
    |         am-nav-item(index='3-3-2') 3-3-2
    |     am-nav-item(index='4') 4
  h2 Inverse
  am-topbar(inverse)
    h1.am-topbar-brand(slot='brand')
      a(href='/') Amazevue
    am-nav.am-topbar-nav(mode='pills', v-model='nav2')
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
    | am-topbar(inverse)
    |   h1.am-topbar-brand(slot='brand')
    |     a(href='/') Amazevue
    |   am-nav.am-topbar-nav(mode='pills', v-model='nav2')
    |     am-nav-item(index='1') 1
    |     am-nav-item(index='2') 2
    |     am-sub-nav
    |       template(slot='title') 3
    |       am-nav-item(index='3-1', default-active) 3-1
    |       am-nav-item(index='3-2') 3-2
    |       am-sub-nav
    |         template(slot='title') 3-3
    |         am-nav-item(index='3-3-1') 3-3-1
    |         am-nav-item(index='3-3-2') 3-3-2
    |     am-nav-item(index='4') 4
  h2 Fixed
  am-radio-group(v-model='nav3fixed')
    am-radio(label='none') None
    am-radio(label='top') Top
    am-radio(label='bottom') Bottom
  am-topbar(:fixed='nav3fixed')
    h1.am-topbar-brand(slot='brand')
      a(href='/') Amazevue
    am-nav.am-topbar-nav(mode='pills', v-model='nav3')
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
    | am-radio-group(v-model='nav3fixed')
    |   am-radio(label='none') None
    |   am-radio(label='top') Top
    |   am-radio(label='bottom') Bottom
    | am-topbar(:fixed='nav3fixed')
    |   h1.am-topbar-brand(slot='brand')
    |     a(href='/') Amazevue
    |   am-nav.am-topbar-nav(mode='pills', v-model='nav3')
    |     am-nav-item(index='1') 1
    |     am-nav-item(index='2') 2
    |     am-sub-nav
    |       template(slot='title') 3
    |       am-nav-item(index='3-1', default-active) 3-1
    |       am-nav-item(index='3-2') 3-2
    |       am-sub-nav
    |         template(slot='title') 3-3
    |         am-nav-item(index='3-3-1') 3-3-1
    |         am-nav-item(index='3-3-2') 3-3-2
    |     am-nav-item(index='4') 4
</template>

<script>
export default {
  data () {
    return {
      nav1: '',
      nav2: '',
      nav3: '',
      nav3fixed: 'none',
    }
  },
}
</script>
