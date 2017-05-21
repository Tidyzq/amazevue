# Input Multiple

## Basic

:::demo
```html
<am-input-multiple v-model="input1"></am-input-multiple>
```
:::

## Color

:::demo
```html
<am-input-multiple type="primary" v-model="input2"></am-input-multiple>
<am-input-multiple type="secondary" v-model="input2"></am-input-multiple>
<am-input-multiple type="success" v-model="input2"></am-input-multiple>
<am-input-multiple type="warning" v-model="input2"></am-input-multiple>
<am-input-multiple type="danger" v-model="input2"></am-input-multiple>
```
:::

## Disabled

:::demo
```html
<am-input-multiple v-model="input3" disabled></am-input-multiple>
```
:::

## Placeholder

:::demo
```html
<am-input-multiple v-model="input4" placeholder="Placeholder"></am-input-multiple>
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
      input1: [ 'A' ],
      input2: [ 'Primary', 'Secondary', 'Success', 'Warning', 'Danger' ],
      input3: [ 'disabled' ],
      input4: [],
    }
  },
}
</script>

<style>
.am-input-multiple + .am-input-multiple {
  margin-top: 1em;
}
</style>
