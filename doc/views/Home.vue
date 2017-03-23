<template lang='jade'>
  .home-page
    ul
      li: router-link(to='/button') Button
      li: router-link(to='/grid') Grid
      li: router-link(to='/radio') Radio
      li: router-link(to='/checkbox') Checkbox
      li: router-link(to='/input') Input
      li: router-link(to='/input-multiple') Input Multiple
      li: router-link(to='/select') Select
      li: router-link(to='/datepicker') DatePicker
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
