<template lang='jade'>
  .table-page.am-container
    h1 Table
    h2 Basic
    am-table(:data='table1')
      am-table-column(prop='label', label='Label')
      am-table-column(prop='value', label='Value')
    pre
      | am-table(:data='table1')
      |   am-table-column(prop='label', label='Label')
      |   am-table-column(prop='value', label='Value')
    h2 Border
    am-table(:data='table1', border)
      am-table-column(prop='label', label='Label')
      am-table-column(prop='value', label='Value')
    pre
      | am-table(:data='table1', border)
      |   am-table-column(prop='label', label='Label')
      |   am-table-column(prop='value', label='Value')
    h2 Stripe Hover Compact
    am-table(:data='table1', border, stripe, hover, compact)
      am-table-column(prop='label', label='Label')
      am-table-column(prop='value', label='Value')
    pre
      | am-table(:data='table1', border, stripe, hover, compact)
      |   am-table-column(prop='label', label='Label')
      |   am-table-column(prop='value', label='Value')
    h2 Select
    am-button(@click='select1=!select1') Select
    am-table(:data='table1', hover, compact)
      am-table-column(prop='label', label='Label', :select='select1', width='10px')
      am-table-column(prop='label', label='Label')
      am-table-column(prop='value', label='Value')
    pre
      | am-table(:data='table1', hover, compact)
      |   am-table-column(select, width='10px')
      |   am-table-column(prop='label', label='Label')
      |   am-table-column(prop='value', label='Value')
    h2 Sort
    am-table(:data='table2', hover, compact, @sortChange='SortChange')
      am-table-column(select, width='10px')
      am-table-column(prop='label', label='Label', sortable)
      am-table-column(prop='value', label='Value', sortable)
    pre
      | am-table(:data='table1', hover, compact)
      |   am-table-column(prop='label', label='Label', sortable)
      |   am-table-column(prop='value', label='Value', sortable)
    h2 Template
    am-button(@click='change1+=1') Change
    am-table(:data='table1', hover, compact)
      am-table-column(prop='label', label='Label')
      am-table-column(prop='value', label='Value')
        template(scope='row') {{ row.value + change1 }}
      am-table-column(label='Operation', width='200px')
        template(scope='row')
          am-button(size='xs', icon='eye', @click='Check(row)')  Check
          am-button(type='danger', size='xs', icon='trash', @click='Delete(row)')  Delete
</template>

<script>
import AmTable from 'src/Table'
import AmTableColumn from 'src/TableColumn'
import AmButton from 'src/Button'

function getCompare (sort) {
  let prop = sort.prop, order = (sort.order === 'ASC')
  return (a, b) => {
    return (a[prop] < b[prop]) ^ order
  }
}

export default {
  components: {
    AmTable,
    AmTableColumn,
    AmButton
  },
  data () {
    return {
      select1: false,
      change1: 0,
      table1: [
        {
          label: 'A',
          value: 3
        }, {
          label: 'B',
          value: 1
        }, {
          label: 'C',
          value: 2
        }, {
          label: 'D',
          value: 4
        }
      ],
      table2: [
        {
          label: 'A',
          value: 3
        }, {
          label: 'B',
          value: 1
        }, {
          label: 'C',
          value: 2
        }, {
          label: 'D',
          value: 4
        }
      ]
    }
  },
  methods: {
    SortChange (sort) {
      this.table2.sort(getCompare(sort))
    },
    Check (row) {
      console.log('check', row)
    },
    Delete (row) {
      console.log('delete', row)
    }
  }
}
</script>
