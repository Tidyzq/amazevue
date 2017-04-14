<template lang='jade'>
  .pagination-page.am-container
    h1 Pagination
    h2 Basic
    am-pagination(:total='70')
    am-pagination(:total='1000')
    pre
      | am-pagination(:total='70')
      | am-pagination(:total='1000')
    h2 Placement
    am-pagination(placement='left', :total='70')
    am-pagination(placement='right', :total='70')
    pre
      | am-pagination(placement='left', :total='70')
      | am-pagination(placement='right', :total='70')
    h2 Layout
    am-pagination(:total='1000', :layout='["total", "prev", "pager", "next"]')
    am-pagination(:total='1000', :layout='["sizes", "prev", "pager", "next"]')
    am-pagination(:total='1000', :layout='["prev", "pager", "next", "jumper"]')
    am-pagination(:total='1000', :layout='["total", "sizes", "prev", "pager", "next", "jumper"]')
    pre
      | am-pagination(:total='1000', :layout='["total", "prev", "pager", "next"]')
      | am-pagination(:total='1000', :layout='["sizes", "prev", "pager", "next"]')
      | am-pagination(:total='1000', :layout='["prev", "pager", "next", "jumper"]')
      | am-pagination(:total='1000', :layout='["total", "sizes", "prev", "pager", "next", "jumper"]')
</template>

<script>
export default {

}
</script>

<style lang='less'>

</style>
