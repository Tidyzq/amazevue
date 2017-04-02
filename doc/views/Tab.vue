<template lang='jade'>
.tab-page.am-container
  h1 Tab
  h2 Basic
  am-tab-set(v-model='tab1')
    am-tab(header='First', name='1')
      p 1
    am-tab(header='Second', name='2')
      p 2
</template>

<script>
import AmTabSet from 'src/TabSet'
import AmTab from 'src/Tab'

export default {
  components: {
    AmTabSet,
    AmTab
  },
  data () {
    return {
      tab1: '1'
    }
  }
}
</script>
