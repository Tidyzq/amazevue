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
    compact: Boolean
  },
  data () {
    return {
      columns: [],
      props: {},
      select: [],
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
    select () {
      this.$emit('selectionChange')
    },
    sort (newVal) {
      this.$emit('sortChange', newVal)
    }
  },
  render (h) {
    let colgroup = h('colgroup', {}, this.$slots.default)
    let header = h(
      'thead',
      {},
      [h(
        'tr',
        {},
        this.columns.map(column => {
          return column.renderHeader(h)
        })
      )]
    )
    let body = h(
      'tbody',
      {},
      this.data.map((row, index) => {
        return h(
          'tr',
          {
            key: index
          },
          this.columns.map(column => {
            return column.renderBody(h, row, index)
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
        'am-table-compact': this.compact
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
  color: @gray-lighter;
  padding-left: @global-spacing-xs;
}

.am-table-sort-btn {
  cursor: pointer
}

.am-table-sort-btn.am-active {
  color: @black;
}

</style>
