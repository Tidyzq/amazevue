<template lang='jade'>
  .am-table-column
</template>

<script>
export default {
  props: {
    prop: String,
    label: String,
    select: Boolean,
    sortable: Boolean,
    width: String
  },
  data () {
    return {
      _table: null
    }
  },
  watch: {
    prop (newVal, oldVal) {
      this.$delete(this._table.props, oldVal)
      this.$set(this._table.props, newVal, this)
    }
  },
  created () {
    let table = this
    while (table && table._table !== true && table.$parent) {
      table = table.$parent
    }
    if (!table._table) {
      throw new Error('TableColumn needs Table to work')
    } else {
      this._table = table
      table.columns.push(this)
      this.$set(table.props, this.prop, this)
    }
  },
  beforeDestroy () {
    this.$delete(this._table.props, this.prop)
    let index = this._table.columns.indexOf(this)
    if (index !== -1) {
      this._table.columns.splice(index, 1)
    }
  },
  computed: {
    selected: {
      get () {
        return this._table.select
      },
      set (newVal) {
        this.$set(this._table, 'select', newVal)
      }
    },
    selectedAll: {
      get () {
        return this.selected.length === this._table.data.length
      },
      set (newVal) {
        this.$set(this._table, 'select', newVal ? this._table.data.slice() : [])
      }
    },
    sort: {
      get () {
        return this._table.sort.prop === this.prop ? this._table.sort.order : ''
      },
      set (newVal) {
        this.$set(this._table, 'sort', {
          prop: this.prop,
          order: newVal
        })
      }
    }
  },
  methods: {
    renderHeader (h) {
      if (this.select) {
        let checkbox = h('am-checkbox', {
          domProps: {
            value: this.selectedAll
          },
          on: {
            input: (event) => {
              this.selectedAll = event
            }
          }
        })
        return h('th', {
          style: {
            width: this.width
          }
        }, [
          checkbox
        ])
      } else {
        let children = [this.label]
        if (this.sortable) {
          children.push(h('span', {
            staticClass: 'am-table-sort'
          }, [
            h('span', {
              staticClass: 'am-icon-caret-up am-table-sort-btn',
              class: {
                'am-active': this.sort === 'ASC'
              },
              on: {
                click: () => {
                  this.sort = 'ASC'
                }
              }
            }),
            h('span', {
              staticClass: 'am-icon-caret-down am-table-sort-btn',
              class: {
                'am-active': this.sort === 'DESC'
              },
              on: {
                click: () => {
                  this.sort = 'DESC'
                }
              }
            })
          ]))
        }
        return h('th', {
          style: {
            width: this.width
          }
        }, children)
      }
    },
    renderBody (h, rowData) {
      if (this.select) {
        let checkbox = h('am-checkbox', {
          domProps: {
            value: this.selected
          },
          on: {
            input: (event) => {
              this.selected = event
            }
          },
          props: {
            label: rowData
          }
        })
        return h('td', {}, [
          checkbox
        ])
      } else if (this.prop) {
        return h('td', {}, rowData[this.prop])
      } else {
        return h('td', {}, this.$scopedSlots.default(rowData))
      }
    }
  }
}
</script>
