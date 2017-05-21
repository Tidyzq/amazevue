# Collapse

## Basic

:::demo
```html
<am-collapse-set v-model="collapse1">
  <am-collapse name="1" title="First">
    <p>this is the first collapse</p>
  </am-collapse>
  <am-collapse name="2" title="Second">
    <p>this is the second collapse</p>
  </am-collapse>
  <am-collapse name="3" title="Third">
    <p>this is the third collapse</p>
  </am-collapse>
</am-collapse-set>
```
:::

## Accordion

:::demo
```html
<am-collapse-set v-model="collapse2" accordion="accordion">
  <am-collapse name="1" title="First">
    <p>this is the first collapse</p>
  </am-collapse>
  <am-collapse name="2" title="Second">
    <p>this is the second collapse</p>
  </am-collapse>
  <am-collapse name="3" title="Third">
    <p>this is the third collapse</p>
  </am-collapse>
</am-collapse-set>
```
:::

## Color

:::demo
```html
<am-collapse-set v-model="collapse3">
  <am-collapse type="primary" name="1" title="Primary">
    <p>this is the primary collapse</p>
  </am-collapse>
  <am-collapse type="secondary" name="2" title="Secondary">
    <p>this is the secondary collapse</p>
  </am-collapse>
  <am-collapse type="success" name="3" title="Success">
    <p>this is the success collapse</p>
  </am-collapse>
  <am-collapse type="warning" name="4" title="Warning">
    <p>this is the warning collapse</p>
  </am-collapse>
  <am-collapse type="danger" name="5" title="Danger">
    <p>this is the danger collapse</p>
  </am-collapse>
</am-collapse-set>
```
:::

## Title

:::demo
```html
<am-collapse-set v-model="collapse4">
  <am-collapse name="1">
    <i class="am-icon-file" slot="title"> First</i>
    <p>this is the first collapse</p>
  </am-collapse>
  <am-collapse name="2">
    <i class="am-icon-file" slot="title"> Second</i>
    <p>this is the second collapse</p>
  </am-collapse>
  <am-collapse name="3">
    <i class="am-icon-file" slot="title"> Third</i>
    <p>this is the third collapse</p>
  </am-collapse>
</am-collapse-set>
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
      collapse1: [],
      collapse2: '',
      collapse3: [],
      collapse4: [],
    }
  },
}
</script>
