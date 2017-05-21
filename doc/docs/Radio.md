# Radio

## Basic

:::demo
```html
<am-radio v-model="radio1" :label="true">primary</am-radio>
<am-radio v-model="radio1" :label="false">primary</am-radio>
<br/>
<am-radio type="secondary" v-model="radio1" :label="true">secondary</am-radio>
<am-radio type="secondary" v-model="radio1" :label="false">secondary</am-radio>
<br/>
<am-radio type="success" v-model="radio1" :label="true">success</am-radio>
<am-radio type="success" v-model="radio1" :label="false">success</am-radio>
<br/>
<am-radio type="warning" v-model="radio1" :label="true">warning</am-radio>
<am-radio type="warning" v-model="radio1" :label="false">warning</am-radio>
<br/>
<am-radio type="danger" v-model="radio1" :label="true">danger</am-radio>
<am-radio type="danger" v-model="radio1" :label="false">danger</am-radio>
```
:::

## Disabled

<label>Disabled
  <am-radio v-model="radio2" :label="true">true</am-radio>
  <am-radio v-model="radio2" :label="false">false</am-radio>
</label>

:::demo
```html
<am-radio v-model="radio3" :label="true" :disabled="radio2">primary</am-radio>
<am-radio v-model="radio3" :label="false" :disabled="radio2">primary</am-radio>
<br/>
<am-radio type="secondary" v-model="radio3" :label="true" :disabled="radio2">secondary</am-radio>
<am-radio type="secondary" v-model="radio3" :label="false" :disabled="radio2">secondary</am-radio>
<br/>
<am-radio type="success" v-model="radio3" :label="true" :disabled="radio2">success</am-radio>
<am-radio type="success" v-model="radio3" :label="false" :disabled="radio2">success</am-radio>
<br/>
<am-radio type="warning" v-model="radio3" :label="true" :disabled="radio2">warning</am-radio>
<am-radio type="warning" v-model="radio3" :label="false" :disabled="radio2">warning</am-radio>
<br/>
<am-radio type="danger" v-model="radio3" :label="true" :disabled="radio2">danger</am-radio>
<am-radio type="danger" v-model="radio3" :label="false" :disabled="radio2">danger</am-radio>
```
:::

## Group

:::demo
```html
<am-radio-group v-model="radio4">
  <am-radio :label="1">1</am-radio>
  <am-radio :label="2">2</am-radio>
  <am-radio :label="3">3</am-radio>
  <am-radio :label="4" disabled="disabled">4</am-radio>
</am-radio-group>
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
      radio1: true,
      radio2: true,
      radio3: true,
      radio4: 1,
    }
  },
}
</script>
