<template lang='jade'>
.am-datepicker-months
  table.am-datepicker-table
    thead
      tr.am-datepicker-header
        th.am-datepicker-prev
          i.am-datepicker-prev-icon(@click='GoPrev')
        th.am-datepicker-switch(colspan='5')
          .am-datepicker-select(@click='GoUpper') {{ presentingStr }}
        th.am-datepicker-next
          i.am-datepicker-next-icon(@click='GoNext')
    tbody
      tr
        td(colspan='7')
          span.am-datepicker-month(v-for='month in monthes', :class='monthClasses(month)', @click='OnSelectMonth(month)') {{ locales.months[month.month] }}
</template>

<script>
import * as DateHelper from './utils/dateHelper'

export default {
  name: 'AmDatePickerMonthes',
  props: {
    locales: Object,
    show: Boolean,
    date: Date,
    minDate: Date,
    maxDate: Date,
  },
  data () {
    const presenting = new Date(this.date)
    presenting.setMonth(0)
    presenting.setDate(1)
    return {
      presenting,
    }
  },
  computed: {
    presentingStr () {
      const presenting = this.presenting
      return presenting.getFullYear()
    },
    startDate () {
      const presenting = this.presenting
      return new Date(presenting.getFullYear(), 0, 1, 0, 0, 0, 0)
    },
    endDate () {
      const presenting = this.presenting
      return new Date(presenting.getFullYear() + 1, 0, 1, 0, 0, 0, 0)
    },
    monthes () {
      const startDate = this.startDate, endDate = this.endDate
      const maxDate = this.maxDate, minDate = this.minDate
      const date = new Date(startDate)
      const present = []
      while (date.valueOf() < endDate.valueOf()) {
        present.push({
          date: new Date(date),
          month: date.getMonth(),
          disabled: (minDate && DateHelper.beforeMonth(date, minDate)) || (maxDate && DateHelper.afterMonth(date, maxDate)),
        })
        date.setMonth(date.getMonth() + 1)
      }
      return present
    },
  },
  watch: {
    date () {
      const presenting = new Date(this.date)
      presenting.setMonth(0)
      presenting.setDate(1)
      this.presenting = presenting
    },
  },
  methods: {
    GoPrev () {
      const presenting = new Date(this.presenting)
      presenting.setFullYear(presenting.getFullYear() - 1)
      this.presenting = presenting
    },
    GoNext () {
      const presenting = new Date(this.presenting)
      presenting.setFullYear(presenting.getFullYear() + 1)
      this.presenting = presenting
    },
    GoUpper () {
      this.$emit('goUpper')
    },
    OnSelectMonth (month) {
      if (!month.disabled) {
        const newDate = new Date(month.date.getFullYear(), month.date.getMonth(), this.date.getDate(), 0, 0, 0, 0)
        this.$emit('select', newDate)
      }
    },
    monthClasses (month) {
      return {
        'am-active': month.date.getFullYear() === this.date.getFullYear() &&
                     month.date.getMonth() === this.date.getMonth(),
        'am-disabled': month.disabled,
      }
    },
  },
}
</script>
