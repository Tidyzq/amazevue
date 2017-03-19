<template lang='jade'>
  .home-page
    ul
      li: router-link(to='/button') Button
      li: router-link(to='/grid') Grid
      li: router-link(to='/radio') Radio
      li: router-link(to='/checkbox') Checkbox
      li: router-link(to='/input') Input
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
