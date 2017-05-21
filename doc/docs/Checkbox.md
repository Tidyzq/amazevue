# Checkbox

## Basic

:::demo
```html
<am-checkbox type="primary" v-model="checkbox1">primary</am-checkbox>
<am-checkbox type="secondary" v-model="checkbox1">secondary</am-checkbox>
<am-checkbox type="success" v-model="checkbox1">success</am-checkbox>
<am-checkbox type="warning" v-model="checkbox1">warning</am-checkbox>
<am-checkbox type="danger" v-model="checkbox1">danger</am-checkbox>
```
:::

## Disabled

<am-checkbox v-model='checkbox2'>disabled</am-checkbox>
:::demo
```html
<am-checkbox type="primary" v-model="checkbox3" :disabled="checkbox2">primary</am-checkbox>
<am-checkbox type="secondary" v-model="checkbox3" :disabled="checkbox2">secondary</am-checkbox>
<am-checkbox type="success" v-model="checkbox3" :disabled="checkbox2">success</am-checkbox>
<am-checkbox type="warning" v-model="checkbox3" :disabled="checkbox2">warning</am-checkbox>
<am-checkbox type="danger" v-model="checkbox3" :disabled="checkbox2">danger</am-checkbox>
```
:::

## Group

:::demo
```html
<am-checkbox-group v-model="checkbox4">
  <am-checkbox label="a">a</am-checkbox>
  <am-checkbox label="b">b</am-checkbox>
  <am-checkbox label="c">c</am-checkbox>
  <am-checkbox label="d" disabled="disabled">d</am-checkbox>
</am-checkbox-group>
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
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: [ 'a' ],
    }
  },
}
</script>
