<template lang='jade'>
  .am-datepicker.am-datepicker-dropdown(style='display: block; top: 844.688px; left: 247.25px;')
    .am-datepicker-caret(style='display: none;')
    .am-datepicker-days(style='display: block;')
      table.am-datepicker-table
        thead
          tr.am-datepicker-header
            th.am-datepicker-prev
              i.am-datepicker-prev-icon
            th.am-datepicker-switch(colspan='5')
              .am-datepicker-select 2017年 三月
            th.am-datepicker-next
              i.am-datepicker-next-icon
          tr
            th.am-datepicker-dow 一
            th.am-datepicker-dow 二
            th.am-datepicker-dow 三
            th.am-datepicker-dow 四
            th.am-datepicker-dow 五
            th.am-datepicker-dow 六
            th.am-datepicker-dow 日
        tbody
          tr
            td.am-datepicker-day.am-datepicker-old 27
            td.am-datepicker-day.am-datepicker-old 28
            td.am-datepicker-day 1
            td.am-datepicker-day 2
            td.am-datepicker-day 3
            td.am-datepicker-day 4
            td.am-datepicker-day 5
          tr
            td.am-datepicker-day 6
            td.am-datepicker-day 7
            td.am-datepicker-day 8
            td.am-datepicker-day 9
            td.am-datepicker-day 10
            td.am-datepicker-day 11
            td.am-datepicker-day 12
          tr
            td.am-datepicker-day 13
            td.am-datepicker-day 14
            td.am-datepicker-day 15
            td.am-datepicker-day 16
            td.am-datepicker-day 17
            td.am-datepicker-day 18
            td.am-datepicker-day 19
          tr
            td.am-datepicker-day 20
            td.am-datepicker-day.am-active 21
            td.am-datepicker-day 22
            td.am-datepicker-day 23
            td.am-datepicker-day 24
            td.am-datepicker-day 25
            td.am-datepicker-day 26
          tr
            td.am-datepicker-day 27
            td.am-datepicker-day 28
            td.am-datepicker-day 29
            td.am-datepicker-day 30
            td.am-datepicker-day 31
            td.am-datepicker-day.am-datepicker-new 1
            td.am-datepicker-day.am-datepicker-new 2
          tr
            td.am-datepicker-day.am-datepicker-new 3
            td.am-datepicker-day.am-datepicker-new 4
            td.am-datepicker-day.am-datepicker-new 5
            td.am-datepicker-day.am-datepicker-new 6
            td.am-datepicker-day.am-datepicker-new 7
            td.am-datepicker-day.am-datepicker-new 8
            td.am-datepicker-day.am-datepicker-new 9
    .am-datepicker-months(style='display: none;')
      table.am-datepicker-table
        thead
          tr.am-datepicker-header
            th.am-datepicker-prev
              i.am-datepicker-prev-icon
            th.am-datepicker-switch(colspan='5')
              .am-datepicker-select 2017
            th.am-datepicker-next
              i.am-datepicker-next-icon
        tbody
          tr
            td(colspan='7')
              span.am-datepicker-month 一月
              span.am-datepicker-month 二月
              span.am-datepicker-month.am-active 三月
              span.am-datepicker-month 四月
              span.am-datepicker-month 五月
              span.am-datepicker-month 六月
              span.am-datepicker-month 七月
              span.am-datepicker-month 八月
              span.am-datepicker-month 九月
              span.am-datepicker-month 十月
              span.am-datepicker-month 十一月
              span.am-datepicker-month 十二月
    .am-datepicker-years(style='display: none;')
      table.am-datepicker-table
        thead
          tr.am-datepicker-header
            th.am-datepicker-prev
              i.am-datepicker-prev-icon
            th.am-datepicker-switch(colspan='5')
              .am-datepicker-select 2010-2019
            th.am-datepicker-next
              i.am-datepicker-next-icon
        tbody
          tr
            td(colspan='7')
              span.am-datepicker-old 2009
              span 2010
              span 2011
              span 2012
              span 2013
              span 2014
              span 2015
              span 2016
              span.am-active 2017
              span 2018
              span 2019
              span.am-datepicker-old 2020
</template>

<script>
const Locales = {
  days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  daysMin: ['日', '一', '二', '三', '四', '五', '六'],
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  weekStart: 1,
  year: ['年']
}
</script>
