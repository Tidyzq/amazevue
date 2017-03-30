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
    pagination(:total='1000', :layout='["total", "prev", "pager", "next"]')
    pagination(:total='1000', :layout='["sizes", "prev", "pager", "next"]')
    pagination(:total='1000', :layout='["prev", "pager", "next", "jumper"]')
    pagination(:total='1000', :layout='["total", "sizes", "prev", "pager", "next", "jumper"]')
    pre
      | pagination(:total='1000', :layout='["total", "prev", "pager", "next"]')
      | pagination(:total='1000', :layout='["sizes", "prev", "pager", "next"]')
      | pagination(:total='1000', :layout='["prev", "pager", "next", "jumper"]')
      | pagination(:total='1000', :layout='["total", "sizes", "prev", "pager", "next", "jumper"]')
</template>

<script>
import Pagination from 'src/Pagination'

export default {
  components: {
    Pagination
  }
}

</script>

<style lang='less'>

</style>
