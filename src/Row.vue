<template lang='jade'>
  .am-g.am-row(:class='classes')
    slot
</template>

<script>
export default {
  name: 'AmRow',
  props: {
    gutter: {
      type: String,
      default: '0'
    }
  },
  created () {
    this._row = true
  },
  computed: {
    classes () {
      return [`am-neg-margin-horizontal-${this.gutter}`]
    }
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-row {
  width: auto;
}

.am-neg-margin-horizontal-0 {
  margin-left: 0!important;
  margin-right: 0!important;
}

.am-neg-margin-horizontal-xs {
  margin-left: -@global-spacing-xs!important;
  margin-right: -@global-spacing-xs!important;
}

.am-neg-margin-horizontal-sm {
  margin-left: -@global-spacing-sm!important;
  margin-right: -@global-spacing-sm!important;
}

.am-neg-margin-horizontal-md {
  margin-left: -@global-spacing!important;
  margin-right: -@global-spacing!important;
}

.am-neg-margin-horizontal-lg {
  margin-left: -@global-spacing-lg!important;
  margin-right: -@global-spacing-lg!important;
}

.am-neg-margin-horizontal-xl {
  margin-left: -@global-spacing-xl!important;
  margin-right: -@global-spacing-xl!important;
}
</style>
