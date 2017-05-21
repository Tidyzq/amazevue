# Input

## Basic

:::demo
```html
<am-input v-model="input1" placeholder="basic"></am-input>
```
:::

## Native Type

:::demo
```html
<am-input v-model="input2" native-type="textarea" placeholder="not resizeable" :rows="5" :resize="false"></am-input>
<am-input v-model="input2" native-type="textarea" placeholder="resizeable"></am-input>
<am-input v-model="input2" native-type="password" placeholder="password"></am-input>
<am-input v-model="input6" native-type="number" placeholder="number"></am-input>
```
:::

## Color

:::demo
```html
<am-input type="primary" v-model="input3" placeholder="primary"></am-input>
<am-input type="secondary" v-model="input3" placeholder="secondary"></am-input>
<am-input type="success" v-model="input3" placeholder="success"></am-input>
<am-input type="warning" v-model="input3" placeholder="warning"></am-input>
<am-input type="danger" v-model="input3" placeholder="danger"></am-input>
```
:::

## Icon & Button

:::demo
```html
<am-input type="primary" v-model="input4" placeholder="User"><i class="am-icon-user" slot="prepend"></i></am-input>
<am-input type="warning" v-model="input4" placeholder="Currency"><span slot="append">.00</span></am-input>
<am-input type="secondary" v-model="input4" placeholder="Search" append-btn="append-btn">
  <am-button slot="append" icon="search"></am-button>
</am-input>
```
:::

## Disabled

:::demo
```html
<am-input type="primary" v-model="input4" placeholder="User" disabled><i class="am-icon-user" slot="prepend"></i></am-input>
<am-input type="warning" v-model="input4" placeholder="Currency" disabled><span slot="append">.00</span></am-input>
<am-input type="secondary" v-model="input4" placeholder="Search" append-btn="append-btn" disabled>
  <am-button slot="append" icon="search" disabled></am-button>
</am-input>
```
:::

## Size

:::demo
```html
<am-input size="lg" v-model="input5" placeholder="lg"><span slot="prepend">@</span></am-input>
<am-input v-model="input5" placeholder="md"><span slot="prepend">@</span></am-input>
<am-input size="sm" v-model="input5" placeholder="sm"><span slot="prepend">@</span></am-input>
<am-input size="lg" v-model="input5" placeholder="lg"></am-input>
<am-input v-model="input5" placeholder="md"></am-input>
<am-input size="sm" v-model="input5" placeholder="sm"></am-input>
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
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: 0,
    }
  },
}
</script>

<style>
.am-input + .am-input {
  margin-top: 1rem;
}
</style>
