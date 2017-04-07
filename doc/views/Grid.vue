<template lang='jade'>
  .grid-page.am-container
    h1 Grid
    h2 Basic
    am-row.am-margin-bottom-sm
      am-col(:span='12'): .grid-content.bg-purple
    am-row.am-margin-bottom-sm
      am-col(:span='6'): .grid-content.bg-purple
      am-col(:span='6'): .grid-content.bg-purple-light
    am-row.am-margin-bottom-sm
      am-col(:span='4'): .grid-content.bg-purple-light
      am-col(:span='4'): .grid-content.bg-purple
      am-col(:span='4'): .grid-content.bg-purple-light
    am-row.am-margin-bottom-sm
      am-col(:span='3'): .grid-content.bg-purple
      am-col(:span='3'): .grid-content.bg-purple-light
      am-col(:span='3'): .grid-content.bg-purple
      am-col(:span='3'): .grid-content.bg-purple-light
    pre
      | am-row.am-margin-bottom-sm
      |   am-col(:span='12'): .grid-content.bg-purple
      | am-row.am-margin-bottom-sm
      |   am-col(:span='6'): .grid-content.bg-purple
      |   am-col(:span='6'): .grid-content.bg-purple-light
      | am-row.am-margin-bottom-sm
      |   am-col(:span='4'): .grid-content.bg-purple-light
      |   am-col(:span='4'): .grid-content.bg-purple
      |   am-col(:span='4'): .grid-content.bg-purple-light
      | am-row.am-margin-bottom-sm
      |   am-col(:span='3'): .grid-content.bg-purple
      |   am-col(:span='3'): .grid-content.bg-purple-light
      |   am-col(:span='3'): .grid-content.bg-purple
      |   am-col(:span='3'): .grid-content.bg-purple-light
    h2 Gutter
    div(style='width: 100%;')
      am-row.am-margin-bottom-sm(gutter='sm')
        am-col(:span='8'): .grid-content.bg-purple
        am-col(:span='4'): .grid-content.bg-purple
      am-row.am-margin-bottom-sm(gutter='sm')
        am-col(:span='4'): .grid-content.bg-purple
        am-col(:span='4'): .grid-content.bg-purple
        am-col(:span='2'): .grid-content.bg-purple
        am-col(:span='2'): .grid-content.bg-purple
      am-row.am-margin-bottom-sm(gutter='sm')
        am-col(:span='2'): .grid-content.bg-purple
        am-col(:span='8'): .grid-content.bg-purple
        am-col(:span='2'): .grid-content.bg-purple
    pre
      | am-row.am-margin-bottom-sm(gutter='sm')
      |   am-col(:span='8'): .grid-content.bg-purple
      |   am-col(:span='4'): .grid-content.bg-purple
      | am-row.am-margin-bottom-sm(gutter='sm')
      |   am-col(:span='4'): .grid-content.bg-purple
      |   am-col(:span='4'): .grid-content.bg-purple
      |   am-col(:span='2'): .grid-content.bg-purple
      |   am-col(:span='2'): .grid-content.bg-purple
      | am-row.am-margin-bottom-sm(gutter='sm')
      |   am-col(:span='2'): .grid-content.bg-purple
      |   am-col(:span='8'): .grid-content.bg-purple
      |   am-col(:span='2'): .grid-content.bg-purple
    h2 Offset
    am-row.am-margin-bottom-sm(gutter='sm')
      am-col(:span='3'): .grid-content.bg-purple
      am-col(:span='3', :offset='3'): .grid-content.bg-purple
    am-row.am-margin-bottom-sm(gutter='sm')
      am-col(:span='3', :offset='3'): .grid-content.bg-purple
      am-col(:span='3', :offset='3'): .grid-content.bg-purple
    am-row.am-margin-bottom-sm(gutter='sm')
      am-col(:span='6', :offset='3'): .grid-content.bg-purple
    pre
      | am-row.am-margin-bottom-sm(gutter='sm')
      |   am-col(:span='3'): .grid-content.bg-purple
      |   am-col(:span='3', :offset='3'): .grid-content.bg-purple
      | am-row.am-margin-bottom-sm(gutter='sm')
      |   am-col(:span='3', :offset='3'): .grid-content.bg-purple
      |   am-col(:span='3', :offset='3'): .grid-content.bg-purple
      | am-row.am-margin-bottom-sm(gutter='sm')
      |   am-col(:span='6', :offset='3'): .grid-content.bg-purple
    h3 Reactive
    am-row.am-margin-bottom-sm(gutter='sm')
      am-col(:span='{"sm":3,"md":2,"lg":1}'): .grid-content.bg-purple
      am-col(:span='{"sm":3,"md":4,"lg":5}'): .grid-content.bg-purple
      am-col(:span='{"sm":3,"md":4,"lg":5}'): .grid-content.bg-purple
      am-col(:span='{"sm":3,"md":2,"lg":1}'): .grid-content.bg-purple
    pre
      | am-row.am-margin-bottom-sm(gutter='sm')
      |   am-col(:sm='3', :md='2', :lg='1'): .grid-content.bg-purple
      |   am-col(:sm='3', :md='4', :lg='5'): .grid-content.bg-purple
      |   am-col(:sm='3', :md='4', :lg='5'): .grid-content.bg-purple
      |   am-col(:sm='3', :md='2', :lg='1'): .grid-content.bg-purple
</template>

<script>
import AmRow from 'src/Row'
import AmCol from 'src/Col'

export default {
  components: {
    AmRow,
    AmCol
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
