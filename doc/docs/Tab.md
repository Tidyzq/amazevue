# Tab

## Basic

:::demo
```html
<am-tab-set v-model="tab1">
  <am-tab header="First" name="1">
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </am-tab>
  <am-tab header="Second" name="2">
    <p>2</p>
  </am-tab>
</am-tab-set>
```
:::

## Overflow

:::demo
```html
<am-tab-set v-model="tab2" overflow="overflow">
  <am-tab header="First" name="1">
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </am-tab>
  <am-tab header="Second" name="2">
    <p>2</p>
    <am-select>
      <am-option v-for="(_, index) in Array(10)" key="index" :label="index.toString()" :value="index"></am-option>
    </am-select>
  </am-tab>
</am-tab-set>
```
:::

## Justify

:::demo
```html
<am-tab-set v-model="tab3" justify="justify">
  <am-tab header="First" name="1">
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </am-tab>
  <am-tab header="Second" name="2">
    <p>2</p>
  </am-tab>
  <am-tab header="Third" name="3">
    <p>3</p>
  </am-tab>
</am-tab-set>
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
      tab1: '1',
      tab2: '1',
      tab3: '1',
    }
  },
}
</script>
