# Table

## Basic

:::demo
```html
<am-table :data="table1">
  <am-table-column prop="label" label="Label"></am-table-column>
  <am-table-column prop="value" label="Value"></am-table-column>
</am-table>
```
:::

## Border

:::demo
```html
<am-table :data="table1" border="border">
  <am-table-column prop="label" label="Label"></am-table-column>
  <am-table-column prop="value" label="Value"></am-table-column>
</am-table>
```
:::

## Stripe Hover Compact

:::demo
```html
<am-table :data="table1" border="border" stripe="stripe" hover="hover" compact="compact">
  <am-table-column prop="label" label="Label"></am-table-column>
  <am-table-column prop="value" label="Value"></am-table-column>
</am-table>
```
:::

## Select

:::demo
```html
<am-table :data="table1" hover="hover" compact="compact">
  <am-table-column select width="10px"></am-table-column>
  <am-table-column prop="label" label="Label"></am-table-column>
  <am-table-column prop="value" label="Value"></am-table-column>
</am-table>
```
:::

## Sort

:::demo
```html
<am-table :data="table2" hover="hover" compact="compact" @sortChange="SortChange">
  <am-table-column select="select" width="10px"></am-table-column>
  <am-table-column prop="label" label="Label" sortable="sortable"></am-table-column>
  <am-table-column prop="value" label="Value" sortable="sortable"></am-table-column>
</am-table>
```
:::

## Template

<am-button @click="OnChange">Change</am-button>

:::demo
```html
<am-table :data="table1" hover="hover" compact="compact">
  <am-table-column prop="label" label="Label"></am-table-column>
  <am-table-column prop="value" label="Value"></am-table-column>
  <am-table-column label="Scoped Value">
    <template scope="row">{{ row.value }}</template>
  </am-table-column>
  <am-table-column label="Operation" width="200px">
    <template scope="row">
      <am-button size="xs" icon="eye" @click="Check(row)"> Check</am-button>
      <am-button type="danger" size="xs" icon="trash" @click="Delete(row)"> Delete</am-button>
    </template>
  </am-table-column>
</am-table>
```
:::

<script>
import PageMixin from '@/mixins/page'

export default {
  mixins: [
    PageMixin,
  ],
  data () {
    return {
      select1: false,
      change1: 0,
      table1: [
        {
          label: 'A',
          value: 3,
        }, {
          label: 'B',
          value: 1,
        }, {
          label: 'C',
          value: 2,
        }, {
          label: 'D',
          value: 4,
        },
      ],
      table2: [
        {
          label: 'A',
          value: 3,
        }, {
          label: 'B',
          value: 1,
        }, {
          label: 'C',
          value: 2,
        }, {
          label: 'D',
          value: 4,
        },
      ],
    }
  },
  methods: {
    SortChange (sort) {
      this.table2.sort(this.getCompare(sort))
    },
    Check (row) {
      console.log('check', row)
    },
    Delete (row) {
      console.log('delete', row)
    },
    OnChange () {
      this.table1.map(item => {
        item.value += 1
      })
    },
    getCompare (sort) {
      const prop = sort.prop, order = (sort.order === 'ASC')
      return (a, b) => {
        return (a[prop] < b[prop]) ^ order
      }
    }
  },
}
</script>
