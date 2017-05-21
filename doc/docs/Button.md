# Buttons

## Default

:::demo
```html
<am-button type="default">default</am-button>
<am-button type="primary">primary</am-button>
<am-button type="secondary">secondary</am-button>
<am-button type="success">success</am-button>
<am-button type="warning">warning</am-button>
<am-button type="danger">danger</am-button>
```
:::

## Radius

:::demo
```html
<am-button type="default" shape="radius">default</am-button>
<am-button type="primary" shape="radius">primary</am-button>
<am-button type="secondary" shape="radius">secondary</am-button>
<am-button type="success" shape="radius">success</am-button>
<am-button type="warning" shape="radius">warning</am-button>
<am-button type="danger" shape="radius">danger</am-button>
```
:::

## Round

:::demo
```html
<am-button type="default" shape="round">default</am-button>
<am-button type="primary" shape="round">primary</am-button>
<am-button type="secondary" shape="round">secondary</am-button>
<am-button type="success" shape="round">success</am-button>
<am-button type="warning" shape="round">warning</am-button>
<am-button type="danger" shape="round">danger</am-button>
```
:::

## Active

:::demo
```html
<am-button type="default" active>default</am-button>
<am-button type="primary" active>primary</am-button>
<am-button type="secondary" active>secondary</am-button>
<am-button type="success" active>success</am-button>
<am-button type="warning" active>warning</am-button>
<am-button type="danger" active>danger</am-button>
```
:::

## Disabled

:::demo
```html
<am-button type="default" disabled>default</am-button>
<am-button type="primary" disabled>primary</am-button>
<am-button type="secondary" disabled>secondary</am-button>
<am-button type="success" disabled>success</am-button>
<am-button type="warning" disabled>warning</am-button>
<am-button type="danger" disabled>danger</am-button>
```
:::

## Size

:::demo
```html
<am-button size="xl">xl</am-button>
<am-button size="lg">lg</am-button>
<am-button size="md">md</am-button>
<am-button size="sm">sm</am-button>
<am-button size="xs">xs</am-button>
```
:::

## Icon
:::demo
```html
<am-button type="default" icon="cog">Setting</am-button>
<am-button type="warning" icon="shopping-cart">Purchase</am-button>
<am-button type="default">
  <i class="am-icon-spinner am-icon-spin"></i>
  Loading
</am-button>
```
:::

<script>
import PageMixin from '@/mixins/page'

export default {
  mixins: [
    PageMixin,
  ],
}
</script>

<style>

.am-btn {
  margin-right: 1rem;
}

</style>
