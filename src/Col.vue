<template lang='jade'>
  .am-lf(:class='classes')
    slot
</template>

<script>
export default {
  name: 'AmCol',
  props: {
    span: {
      type: [ Number, Object ],
      default: 12,
    },
    offset: {
      type: [ Number, Object ],
      default: 0,
    },
  },
  data () {
    return {
      _row: null,
    }
  },
  created () {
    let row = this
    while (row && row._row !== true && row.$parent) {
      row = row.$parent
    }
    if (row._row) {
      this._row = row
    }
  },
  computed: {
    spanObj () {
      return typeof this.span === 'object' ? this.span : { sm: this.span }
    },
    offsetObj () {
      return typeof this.offset === 'object' ? this.offset : { sm: this.offset }
    },
    gutter () {
      return this._row ? this._row.gutter : '0'
    },
    classes () {
      const classes = [], sizes = [ 'sm', 'md', 'lg' ], span = this.spanObj, offset = this.offsetObj
      sizes.forEach(size => {
        if (span[size]) {
          classes.push(`am-u-${size}-${span[size]}`)
        }
        if (offset[size]) {
          classes.push(`am-u-${size}-offset-${offset[size]}`)
        }
      })
      const gutter = this.gutter
      if (gutter) {
        classes.push(`am-padding-horizontal-${gutter}`)
      }
      return classes
    },
  },
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-padding-horizontal-md {
  padding-left: @global-spacing;
  padding-right: @global-spacing;
}

.am-lf {
  float: left !important;
}
</style>
