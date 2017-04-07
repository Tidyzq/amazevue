<script>
import AmCheckbox from './Checkbox'

export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    border: Boolean,
    stripe: Boolean,
    hover: Boolean,
    compact: Boolean,
    selection: {
      type: Array,
      default () {
        return []
      }
    },
    noWrap: {
      type: String,
      default: 'none'
    }
  },
  data () {
    return {
      columns: [],
      props: {},
      select: this.selection,
      sort: {
        prop: '',
        order: ''
      }
    }
  },
  created () {
    this._table = true
  },
  watch: {
    data (newVal) {
      this.select = this.select.filter(row => {
        return newVal.some(item => item === row)
      })
    },
    selection (newVal) {
      this.select = newVal
    },
    select (newVal) {
      this.$emit('selectionChange', newVal)
    },
    sort (newVal) {
      this.$emit('sortChange', newVal)
    }
  },
  render (h) {
    let colgroup = h('colgroup', {}, this.$slots.default)
    let header = h(
      'thead',
      {
        class: {
          'am-text-nowrap': this.noWrap === 'header'
        }
      },
      [
        h(
          'tr',
          {},
          this.columns.map(column => {
            return column.renderHeader.call(this._renderProxy, h)
          })
        )
      ]
    )
    let body = h(
      'tbody',
      {
        class: {
          'am-text-nowrap': this.noWrap === 'body'
        }
      },
      this.data.map((row, index) => {
        return h(
          'tr',
          {
            key: index
          },
          this.columns.map(column => {
            return column.renderBody.call(this._renderProxy, h, row, index)
          })
        )
      })
    )
    return h('table', {
      staticClass: 'am-table',
      class: {
        'am-table-bordered': this.border,
        'am-table-striped': this.stripe,
        'am-table-hover': this.hover,
        'am-table-compact': this.compact,
        'am-text-nowrap': this.noWrap === 'all'
      }
    }, [
      colgroup,
      header,
      body
    ])
  },
  components: {
    AmCheckbox
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-table-sort {
  color: lighten(@gray-light, 10%);
  padding-left: @global-spacing-xs;
}

.am-table-sort-btn {
  cursor: pointer
}

.am-table-sort-btn.am-active {
  color: @black;
}

</style>
