<template lang='jade'>
  ul.am-option-group
    li.am-selected-list-header {{label}}
    slot
</template>

<script>
export default {
  props: {
    label: String
  },
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
.am-option-group {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
