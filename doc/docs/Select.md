# Select

## Basic

:::demo
```html
<am-select v-model="select1">
  <am-option value="A" label="A"></am-option>
  <am-option value="B" label="B"></am-option>
  <am-option value="C" label="C"></am-option>
  <am-option value="D" label="D" disabled="disabled"></am-option>
</am-select>
```
:::

## Placeholder

:::demo
```html
<am-select v-model="select2" placeholder="select">
  <am-option value="A" label="A"></am-option>
  <am-option value="B" label="B"></am-option>
  <am-option value="C" label="C"></am-option>
  <am-option value="D" label="D" disabled="disabled"></am-option>
</am-select>
```
:::

## Multiple

:::demo
```html
<am-select v-model="select3" multiple="multiple">
  <am-option value="A" label="A"></am-option>
  <am-option value="B" label="B"></am-option>
  <am-option value="C" label="C"></am-option>
  <am-option value="D" label="D" disabled="disabled"></am-option>
</am-select>
```
:::

## Group

:::demo
```html
<am-select v-model="select4">
  <am-option-group label="section1">
    <am-option value="A" label="A"></am-option>
    <am-option value="B" label="B"></am-option>
    <am-option value="C" label="C"></am-option>
  </am-option-group>
  <am-option-group label="section2">
    <am-option value="D" label="D"></am-option>
    <am-option value="E" label="E"></am-option>
    <am-option value="F" label="F"></am-option>
  </am-option-group>
  <am-option-group label="section3">
    <am-option value="G" label="G"></am-option>
    <am-option value="H" label="H"></am-option>
    <am-option value="I" label="I" disabled="disabled"></am-option>
  </am-option-group>
</am-select>
```
:::

## Color

:::demo
```html
<am-select type="primary" v-model="select5">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="secondary" v-model="select5">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="success" v-model="select5">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="warning" v-model="select5">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="danger" v-model="select5">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="primary" v-model="select6" multiple="multiple">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="secondary" v-model="select6" multiple="multiple">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="success" v-model="select6" multiple="multiple">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="warning" v-model="select6" multiple="multiple">
  <am-option value="A" label="A"></am-option>
</am-select>
<am-select type="danger" v-model="select6" multiple="multiple">
  <am-option value="A" label="A"></am-option>
</am-select>
```
:::

## Max Hight

:::demo
```html
<am-select v-model="select7" max-height="200px">
  <am-option value="A" label="A"></am-option>
  <am-option value="B" label="B"></am-option>
  <am-option value="C" label="C"></am-option>
  <am-option value="D" label="D"></am-option>
  <am-option value="E" label="E"></am-option>
  <am-option value="F" label="F"></am-option>
  <am-option value="G" label="G"></am-option>
  <am-option value="H" label="H"></am-option>
  <am-option value="I" label="I"></am-option>
  <am-option value="J" label="J"></am-option>
  <am-option value="K" label="K"></am-option>
  <am-option value="L" label="L"></am-option>
  <am-option value="M" label="M"></am-option>
  <am-option value="N" label="N"></am-option>
  <am-option value="O" label="O"></am-option>
  <am-option value="P" label="P"></am-option>
  <am-option value="Q" label="Q"></am-option>
  <am-option value="R" label="R"></am-option>
  <am-option value="S" label="S"></am-option>
  <am-option value="T" label="T"></am-option>
  <am-option value="U" label="U"></am-option>
  <am-option value="V" label="V"></am-option>
  <am-option value="W" label="W"></am-option>
  <am-option value="X" label="X"></am-option>
  <am-option value="Y" label="Y"></am-option>
  <am-option value="Z" label="Z"></am-option>
</am-select>
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
      select1: 'A',
      select2: '',
      select3: [ 'A' ],
      select4: 'A',
      select5: 'A',
      select6: [ 'A' ],
      select7: 'A',
    }
  },
}
</script>

<style>

.am-selected + .am-selected {
  margin-top: 1rem;
}

</style>
