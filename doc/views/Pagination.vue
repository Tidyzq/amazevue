<template lang='jade'>
  .pagination-page.am-container
    h1 Pagination
    h2 Basic
    pagination(:total='70')
    pagination(:total='1000')
    pre
      | pagination(:total='70')
      | pagination(:total='1000')
    h2 Placement
    pagination(placement='left', :total='70')
    pagination(placement='right', :total='70')
    pre
      | pagination(placement='left', :total='70')
      | pagination(placement='right', :total='70')
    h2 Layout
    pagination(:total='1000', :layout='["total", "pager"]')
    pagination(:total='1000', :layout='["sizes", "pager"]')
    pagination(:total='1000', :layout='["pager", "jumper"]')
    pagination(:total='1000', :layout='["total", "sizes", "pager", "jumper"]')
    pre
      | pagination(:total='1000', :layout='["total", "pager"]')
      | pagination(:total='1000', :layout='["sizes", "pager"]')
      | pagination(:total='1000', :layout='["pager", "jumper"]')
      | pagination(:total='1000', :layout='["total", "sizes", "pager", "jumper"]')
</template>

<script>
import Pagination from 'src/Pagination'

export default {
  components: {
    Pagination
  },
  methods: {
    Change () {
      console.log('change')
    }
  }
}

</script>

<style lang='less'>

</style>
