# DatePicker

## Basic

:::demo
```html
<am-date-picker v-model="date1"></am-date-picker>
```
:::

## Placeholder

:::demo
```html
<am-date-picker v-model="date2" placeholder="Select Date"></am-date-picker>
```
:::

## Limit

:::demo
```html
<am-date-picker v-model="date3" max="2017-06-01" min="2016-06-01"></am-date-picker>
```
:::

## Color

:::demo
```html
<am-date-picker type="success" v-model="date4"></am-date-picker>
<am-date-picker type="warning" v-model="date4"></am-date-picker>
<am-date-picker type="danger" v-model="date4"></am-date-picker>
```
:::

## Format

:::demo
```html
<am-date-picker v-model="date5" format="yyyy/mm/dd"></am-date-picker>
```
:::

## Mode

:::demo
```html
<am-date-picker v-model="date6" mode="month" format="yyyy-mm"></am-date-picker>
<am-date-picker v-model="date7" mode="year" format="yyyy"></am-date-picker>
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
      date1: '1970-01-01',
      date2: '',
      date3: '2017-01-01',
      date4: '1970-01-01',
      date5: '1970/01/01',
      date6: '1970-01',
      date7: '1970',
    }
  },
}
</script>

<style>
.am-date-picker + .am-date-picker {
  margin-top: 1rem;
}
</style>
