# Nav

## Basic

:::demo
```html
<am-nav v-model="nav1">
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
```
:::

## Icon

:::demo
```html
<am-nav v-model="nav2">
  <am-nav-item index="1" icon="dashboard">1</am-nav-item>
  <am-nav-item index="2" icon="users">2</am-nav-item>
  <am-sub-nav icon="folder">
    <template slot="title">3</template>
    <am-nav-item index="3-1" icon="file" default-active="default-active">3-1</am-nav-item>
    <am-nav-item index="3-2" icon="file">3-2</am-nav-item>
    <am-sub-nav icon="folder">
      <template slot="title">3-3</template>
      <am-nav-item index="3-3-1" icon="file">3-3-1</am-nav-item>
      <am-nav-item index="3-3-2" icon="file">3-3-2</am-nav-item>
    </am-sub-nav>
  </am-sub-nav>
  <am-nav-item index="4" icon="shopping-bag">4</am-nav-item>
</am-nav>
```
:::

## Pills

:::demo
```html
<am-nav v-model="nav3" mode="pills">
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
```
:::

## Tabs

:::demo
```html
<am-nav v-model="nav4" mode="tabs">
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
      nav4: '',
    }
  },
}
</script>
