<template lang='jade'>
  .home-page
    ul
      li: router-link(to='/modal') Modal
      li: router-link(to='/collapse') Collapse
      li: router-link(to='/loading') Loading
      li: router-link(to='/alert') Alert
      li: router-link(to='/message') Message
      li: router-link(to='/topbar') Topbar
      li: router-link(to='/nav') Nav
      li: router-link(to='/dropdown') Dropdown
</template>

<script>
export default {
  data () {
    return {

    }
  },
}
</script>
