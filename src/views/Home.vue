<template lang='jade'>
  .home-page
    ul
      li: router-link(to='/button') Button
      li: router-link(to='/grid') Grid
      li: router-link(to='/radio') Radio
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
