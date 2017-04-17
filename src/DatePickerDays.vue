<template lang='jade'>
  .am-datepicker-days
    table.am-datepicker-table
      thead
        tr.am-datepicker-header
          th.am-datepicker-prev
            i.am-datepicker-prev-icon(@click='GoPrev')
          th.am-datepicker-switch(colspan='5')
            .am-datepicker-select(@click='GoUpper') {{ presentingStr }}
          th.am-datepicker-next
            i.am-datepicker-next-icon(@click='GoNext')
        tr
          th.am-datepicker-dow(v-for='day in locales.daysMin') {{ day }}
      tbody
        tr(v-for='week in days')
          td.am-datepicker-day(v-for='day in week', :class='dayClasses(day)', @click='OnSelectDay(day)') {{day.day}}
</template>

<script>
import * as DateHelper from './utils/dateHelper'

export default {
  name: 'AmDatePickerDays',
  props: {
    locales: Object,
    date: Date,
    minDate: Date,
    maxDate: Date,
  },
  data () {
    const presenting = new Date(this.date)
    presenting.setDate(1)
    return {
      presenting,
    }
  },
  computed: {
    presentingStr () {
      const presenting = this.presenting
      return presenting.getFullYear() + this.locales.year[0] + ' ' + this.locales.months[presenting.getMonth()]
    },
    startDate () {
      const presenting = this.presenting
      const prevMonth = new Date(presenting.getFullYear(), presenting.getMonth() - 1, 1, 0, 0, 0, 0)
      const daysInMonth = DateHelper.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth())
      prevMonth.setDate(daysInMonth)
      prevMonth.setDate(daysInMonth - (prevMonth.getDay() - this.locales.weekStart + 7) % 7)
      return prevMonth
    },
    endDate () {
      const prevMonth = this.startDate
      const nextMonth = new Date(prevMonth)
      nextMonth.setDate(nextMonth.getDate() + 42)
      return nextMonth
    },
    days () {
      const startDate = this.startDate, endDate = this.endDate
      const maxDate = this.maxDate, minDate = this.minDate
      const date = new Date(startDate)
      const present = []
      let week = []
      while (date.valueOf() < endDate.valueOf()) {
        let type = 'cur'
        if (date.getMonth() === startDate.getMonth()) {
          type = 'old'
        } else if (date.getMonth() === endDate.getMonth()) {
          type = 'new'
        }
        week.push({
          date: new Date(date),
          day: date.getDate(),
          type,
          disabled: (minDate && date < minDate) || (maxDate && date > maxDate),
        })
        if (date.getDay() === ((this.locales.weekStart + 6) % 7)) {
          present.push(week)
          week = []
        }
        date.setDate(date.getDate() + 1)
      }
      present.push(week)
      return present
    },
  },
  watch: {
    date () {
      const presenting = new Date(this.date)
      presenting.setDate(1)
      this.presenting = presenting
    },
  },
  methods: {
    GoPrev () {
      const presenting = new Date(this.startDate)
      presenting.setDate(1)
      this.presenting = presenting
    },
    GoNext () {
      const presenting = new Date(this.endDate)
      presenting.setDate(1)
      this.presenting = presenting
    },
    GoUpper () {
      this.$emit('goUpper')
    },
    OnSelectDay (day) {
      if (!day.disabled) {
        this.$emit('select', day.date)
      }
    },
    dayClasses (day) {
      return {
        'am-datepicker-old': day.type === 'old',
        'am-active': day.date.getFullYear() === this.date.getFullYear() &&
                     day.date.getMonth() === this.date.getMonth() &&
                     day.date.getDate() === this.date.getDate(),
        'am-datepicker-new': day.type === 'new',
        'am-disabled': day.disabled,
      }
    },
  },
}
</script>
