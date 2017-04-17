<template lang='jade'>
ul.am-nav
  slot
</template>

<script>
export default {
  name: 'AmNav',
  props: {
    value: null,
  },
  data () {
    return {
      items: [],
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
