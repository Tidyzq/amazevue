<template lang='jade'>
  div(:class='classes')
    slot
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: 12
    },
    offset: Number,
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  computed: {
    classes () {
      let classes = ['am-lf']
      let setup = {}
      let gutter = this.$parent.gutter || '0'
      if (gutter) {
        classes.push(`am-padding-horizontal-${gutter}`)
      }
      (['sm', 'md', 'lg']).forEach(size => {
        if (typeof this[size] === 'number') {
          setup[size] = {span: this[size]}
        } else if (typeof this[size] === 'object') {
          setup[size] = this[size]
        }
      })
      if (!setup.sm) setup.sm = { span: this.span, offset: this.offset }
      Object.keys(setup).forEach(size => {
        let s = setup[size]
        if (s) {
          if (s.span) classes.push(`am-u-${size}-${s.span}`)
          if (s.offset) classes.push(`am-u-${size}-offset-${s.offset}`)
        }
      })
      return classes
    }
  }
}
</script>

<style lang='less'>
@import '../less/variables.less';

.am-padding-horizontal-md {
  padding-left: @spacing-md;
  padding-right: @spacing-md;
}

.am-lf {
  float: left !important;
}
</style>
