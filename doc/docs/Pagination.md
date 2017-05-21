# Pagination

## Basic

:::demo
```html
<am-pagination :total="70"></am-pagination>
<am-pagination :total="1000"></am-pagination>
```
:::

## Placement

:::demo
```html
<am-pagination placement="left" :total="70"></am-pagination>
<am-pagination placement="right" :total="70"></am-pagination>
```
:::

## Layout

:::demo
```html
<am-pagination :total="1000" :layout="['total', 'prev', 'pager', 'next']"></am-pagination>
<am-pagination :total="1000" :layout="['sizes', 'prev', 'pager', 'next']"></am-pagination>
<am-pagination :total="1000" :layout="['prev', 'pager', 'next', 'jumper']"></am-pagination>
<am-pagination :total="1000" :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']"></am-pagination>
```
:::
</template>

<script>
import PageMixin from '@/mixins/page'

export default {
  mixins: [
    PageMixin,
  ],
}
</script>
