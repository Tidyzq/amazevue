# Topbar

## Basic

:::demo
```html
<am-topbar>
  <h1 class="am-topbar-brand" slot="brand"><a href="/">Amazevue</a></h1>
  <am-nav class="am-topbar-nav" mode="pills" v-model="nav1">
    <am-nav-item index="1">1</am-nav-item>
    <am-nav-item index="2">2</am-nav-item>
    <am-sub-nav>
      <template slot="title">3</template>
      <am-nav-item index="3-1" default-active>3-1</am-nav-item>
      <am-nav-item index="3-2">3-2</am-nav-item>
      <am-sub-nav>
        <template slot="title">3-3</template>
        <am-nav-item index="3-3-1">3-3-1</am-nav-item>
        <am-nav-item index="3-3-2">3-3-2</am-nav-item>
      </am-sub-nav>
    </am-sub-nav>
    <am-nav-item index="4">4</am-nav-item>
  </am-nav>
</am-topbar>
```
:::

## Inverse

:::demo
```html
<am-topbar inverse>
  <h1 class="am-topbar-brand" slot="brand"><a href="/">Amazevue</a></h1>
  <am-nav class="am-topbar-nav" mode="pills" v-model="nav2">
    <am-nav-item index="1">1</am-nav-item>
    <am-nav-item index="2">2</am-nav-item>
    <am-sub-nav>
      <template slot="title">3</template>
      <am-nav-item index="3-1" default-active>3-1</am-nav-item>
      <am-nav-item index="3-2">3-2</am-nav-item>
      <am-sub-nav>
        <template slot="title">3-3</template>
        <am-nav-item index="3-3-1">3-3-1</am-nav-item>
        <am-nav-item index="3-3-2">3-3-2</am-nav-item>
      </am-sub-nav>
    </am-sub-nav>
    <am-nav-item index="4">4</am-nav-item>
  </am-nav>
</am-topbar>
```
:::

## Fixed

<am-radio-group v-model="nav3fixed">
  <am-radio label="none">None</am-radio>
  <am-radio label="top">Top</am-radio>
  <am-radio label="bottom">Bottom</am-radio>
</am-radio-group>

:::demo
```html
<am-topbar :fixed="nav3fixed">
  <h1 class="am-topbar-brand" slot="brand"><a href="/">Amazevue</a></h1>
  <am-nav class="am-topbar-nav" mode="pills" v-model="nav3">
    <am-nav-item index="1">1</am-nav-item>
    <am-nav-item index="2">2</am-nav-item>
    <am-sub-nav>
      <template slot="title">3</template>
      <am-nav-item index="3-1" default-active="default-active">3-1</am-nav-item>
      <am-nav-item index="3-2">3-2</am-nav-item>
      <am-sub-nav>
        <template slot="title">3-3</template>
        <am-nav-item index="3-3-1">3-3-1</am-nav-item>
        <am-nav-item index="3-3-2">3-3-2</am-nav-item>
      </am-sub-nav>
    </am-sub-nav>
    <am-nav-item index="4">4</am-nav-item>
  </am-nav>
</am-topbar>
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
      nav1: '',
      nav2: '',
      nav3: '',
      nav3fixed: 'none',
    }
  },
}
</script>
