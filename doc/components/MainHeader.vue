<template lang='jade'>
header
  am-topbar.header-topbar(inverse, container, fixed='top')
    h1.am-topbar-brand(slot='brand')
      //- am-button.am-fl.am-topbar-btn.am-topbar-toggle.am-show-sm-only(size='sm', type='primary', @click='sidebarShow = !sidebarShow', icon='bars')
      a(href='/') Amazevue
    am-nav.am-topbar-nav(v-model='topbarNav', mode='pills')
      //- am-nav-item(index='maka', :default-active='!Lite', href='/maka') MAKA
    .am-topbar-right
      //- am-button.am-topbar-btn(type='secondary', size='sm', icon='user', @click='userDropdown = !userDropdown', :active='userDropdown')
      //-   | {{ username }}
      //-   i.am-margin-left-xs.am-icon-caret-down
      //- am-dropdown(v-model='userDropdown')
      //-   am-nav
      //-     am-nav-item(index='logout', @click='logout') 登出
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return {
      topbarNav: '',
    }
  },
}
</script>

<style lang='css'>
.header-topbar {
  height: 50px;
  margin: 0;
}
</style>
