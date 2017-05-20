# Alert

## Basic

:::demo
```html
<am-alert type="default" title="Default"></am-alert>
<am-alert type="primary" title="Primary"></am-alert>
<am-alert type="secondary" title="Secondary"></am-alert>
<am-alert type="success" title="Success"></am-alert>
<am-alert type="warning" title="Warning"></am-alert>
<am-alert type="danger" title="Danger"></am-alert>
```
:::

## Description

:::demo
```html
<am-alert type="primary" title="Primary" description="This is an alert"></am-alert>
```
:::

## Closeable
:::demo
```html
<am-alert type="primary" title="Primary" description="This is an alert" v-model="alert1" closeable></am-alert>
```
:::

## Show Icon

:::demo
```html
<am-alert type="default" title="Default" show-icon="show-icon"></am-alert>
<am-alert type="primary" title="Primary" show-icon="show-icon"></am-alert>
<am-alert type="secondary" title="Secondary" show-icon="show-icon"></am-alert>
<am-alert type="success" title="Success" show-icon="show-icon"></am-alert>
<am-alert type="warning" title="Warning" show-icon="show-icon"></am-alert>
<am-alert type="danger" title="Danger" show-icon="show-icon"></am-alert>
```
:::

## Show Icon with Description

:::demo
```html
<am-alert type="primary" title="Primary" description="This is an alert" v-model="alert2" closeable="closeable" show-icon="show-icon"></am-alert>
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
      alert1: true,
      alert2: true,
    }
  },
}
</script>
