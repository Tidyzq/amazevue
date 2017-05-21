# Dropdown

## Basic

:::demo
```html
<am-button type="primary" icon="caret-down" @click="dropdown1 = !dropdown1" :active="dropdown1">Toggle Dropdown</am-button>
<am-dropdown v-model="dropdown1">
  <am-nav>
    <am-nav-item index="1">1</am-nav-item>
    <am-nav-item index="2">2</am-nav-item>
    <am-sub-nav>
      <template slot="title">3</template>
      <am-nav-item index="3-1">3-1</am-nav-item>
      <am-nav-item index="3-2">3-2</am-nav-item>
    </am-sub-nav>
  </am-nav>
</am-dropdown>
```
:::

## Drop Up

:::demo
```html
<am-dropdown v-model="dropdown2" direction="up">
  <am-nav>
    <am-nav-item index="1">1</am-nav-item>
    <am-nav-item index="2">2</am-nav-item>
    <am-sub-nav>
      <template slot="title">3</template>
      <am-nav-item index="3-1">3-1</am-nav-item>
      <am-nav-item index="3-2">3-2</am-nav-item>
    </am-sub-nav>
  </am-nav>
</am-dropdown>
<am-button type="warning" icon="caret-down" @click="dropdown2 = !dropdown2" :active="dropdown2">Toggle Dropup</am-button>
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
      dropdown1: false,
      dropdown2: false,
    }
  },
}
</script>
