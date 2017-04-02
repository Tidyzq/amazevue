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
      li: router-link(to='/date-picker') DatePicker
      li: router-link(to='/file-select') FileSelect
      li: router-link(to='/form') Form
      li: router-link(to='/pagination') Pagination
      li: router-link(to='/table') Table
      li: router-link(to='/modal') Modal
      li: router-link(to='/tab') Tab
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
