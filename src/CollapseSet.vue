<template lang='jade'>
.am-collpase-set.am-panel-group
  slot
</template>

<script>
export default {
  props: {
    value: [Number, String, Boolean, Array],
    accordion: Boolean
  },
  data () {
    return {
      // collpases: [],
      show: this.value
    }
  },
  created () {
    this._collapseSet = true
  },
  watch: {
    value (newVal) {
      this.show = newVal
    },
    show (newVal) {
      this.$emit('input', newVal)
      this.$emit('change', newVal)
    }
  }
}
</script>
