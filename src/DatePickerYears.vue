<template lang='jade'>
.am-datepicker-years
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
          span(v-for='year in years', :class='yearClasses(year)', @click='OnSelectYear(year)') {{ year.year }}
</template>

<script>
import * as DateHelper from './utils/dateHelper'

export default {
  name: 'AmDatePickerYears',
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
    startYear () {
      const presenting = this.presenting
      let year = presenting.getFullYear()
      year = (year - (year % 10))
      return year
    },
    presentingStr () {
      const startYear = this.startYear
      return `${startYear}-${startYear + 10}`
    },
    startDate () {
      const startYear = this.startYear
      return new Date(startYear - 1, 0, 1, 0, 0, 0, 0)
    },
    endDate () {
      const startYear = this.startYear
      return new Date(startYear + 11, 0, 1, 0, 0, 0, 0)
    },
    years () {
      const startDate = this.startDate, endDate = this.endDate
      const maxDate = this.maxDate, minDate = this.minDate
      const date = new Date(startDate), present = []
      while (date.valueOf() < endDate.valueOf()) {
        let type = 'cur'
        if (present.length === 0) {
          type = 'old'
        } else if (present.length === 11) {
          type = 'new'
        }
        present.push({
          date: new Date(date),
          year: date.getFullYear(),
          type,
          disabled: (minDate && DateHelper.beforeYear(date, minDate)) || (maxDate && DateHelper.afterYear(date, maxDate)),
        })
        date.setFullYear(date.getFullYear() + 1)
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
      presenting.setFullYear(presenting.getFullYear() - 10)
      this.presenting = presenting
    },
    GoNext () {
      const presenting = new Date(this.presenting)
      presenting.setFullYear(presenting.getFullYear() + 10)
      this.presenting = presenting
    },
    GoUpper () {
      this.$emit('goUpper')
    },
    yearClasses (year) {
      return {
        'am-datepicker-old': year.type === 'old' || year.type === 'new',
        'am-active': year.date.getFullYear() === this.date.getFullYear(),
        'am-disabled': year.disabled,
      }
    },
    OnSelectYear (year) {
      if (!year.disabled) {
        const newDate = new Date(year.date.getFullYear(), this.date.getMonth(), this.date.getDate(), 0, 0, 0, 0)
        this.$emit('select', newDate)
      }
    },
  },
}
</script>
