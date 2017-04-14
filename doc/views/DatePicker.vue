<template lang='jade'>
  .datepicker-page.am-container
    h1 DatePicker
    h2 Basic
    am-date-picker(v-model='date1')
    pre
      | am-date-picker(v-model='date1')
    h2 Placeholder
    am-date-picker(v-model='date2', placeholder='Select Date')
    pre
      | am-date-picker(v-model='date2', placeholder='Select Date')
    h2 Limit
    am-date-picker(v-model='date3', max='2017-06-01', min='2016-06-1')
    pre
      | am-date-picker(v-model='date3', max='2017-06-01', min='2016-06-1')
    h2 Color
    am-date-picker(type='success', v-model='date4')
    am-date-picker(type='warning', v-model='date4')
    am-date-picker(type='danger', v-model='date4')
    pre
      | am-date-picker(type='success', v-model='date4')
      | am-date-picker(type='warning', v-model='date4')
      | am-date-picker(type='danger', v-model='date4')
    h2 Format
    am-date-picker(v-model='date5', format='yyyy年m月d日')
    pre
      | am-date-picker(v-model='date5', format='yyyy年m月d日')
    h2 Mode
    am-date-picker(v-model='date6', mode='month', format='yyyy-mm')
    pre
      | am-date-picker(v-model='date6', mode='month', format='yyyy-mm')
</template>

<script>
export default {
  data () {
    return {
      date1: '1970-01-01',
      date2: '',
      date3: '2017-01-01',
      date4: '1970-01-01',
      date5: '1970年1月1日',
      date6: '1970-01'
    }
  }
}
</script>

<style lang='less'>
.am-date-picker + .am-date-picker {
  margin-top: 1rem;
}
</style>
