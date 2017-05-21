# Loading

## Basic

<am-button @click="SwitchLoading1">Switch</am-button>

:::demo
```html
<am-loading :loading="loading1">
  <am-table :data="table1" hover="hover">
    <am-table-column prop="label" label="Label"></am-table-column>
    <am-table-column prop="value" label="Value"></am-table-column>
  </am-table>
</am-loading>
```
:::

## Text

:::demo
```html
<am-loading :loading="true" text="loading...">
  <am-table :data="table1" hover="hover">
    <am-table-column prop="label" label="Label"></am-table-column>
    <am-table-column prop="value" label="Value"></am-table-column>
  </am-table>
</am-loading>
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
      loading1: true,
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
    }
  },
  methods: {
    SwitchLoading1 () {
      this.loading1 = !this.loading1
    },
  },
}
</script>
