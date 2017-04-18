<template lang='jade'>
ul.am-nav(:class=`{
    'am-nav-pills': mode === 'pills',
    'am-nav-tabs': mode === 'tabs',
  }`)
  slot
</template>

<script>
export default {
  name: 'AmNav',
  props: {
    value: null,
    mode: {
      type: String,
      default: 'vertical',
    },
  },
  data () {
    return {
      items: [],
      padding: 0,
    }
  },
  computed: {
    active: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      },
    },
  },
  created () {
    this._nav = true
  },
}
</script>

<style lang='less' scoped>

</style>
