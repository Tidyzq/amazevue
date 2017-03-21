<template lang='jade'>
  .am-date-picker.am-dropdown(ref='datepicker')
    button.am-date-picker-btn.am-btn.am-dropdown-toggle.am-btn-default(@click='OnClickToggle')
      span.am-selected-placeholder.am-fl(v-if='!value') {{placeholder}}
      span.am-selected-status.am-fl(v-else) {{value}}
    .am-datepicker.am-datepicker-dropdown(:class='contentClasses', ref='content')
      .am-datepicker-days(v-show='showType==="day"')
        table.am-datepicker-table
          thead
            tr.am-datepicker-header
              th.am-datepicker-prev
                i.am-datepicker-prev-icon(@click='dayShow=dayStartDate')
              th.am-datepicker-switch(colspan='5')
                .am-datepicker-select(@click='showType="month"') {{daysSelect}}
              th.am-datepicker-next
                i.am-datepicker-next-icon(@click='dayShow=dayEndDate')
            tr
              th.am-datepicker-dow(v-for='day in Locales.daysMin') {{day}}
          tbody
            tr(v-for='week in daysPresent')
              td.am-datepicker-day(v-for='day in week', :class='dayClasses(day)', @click='OnSelectDay(day)') {{day.day}}
      .am-datepicker-months(v-show='showType==="month"')
        table.am-datepicker-table
          thead
            tr.am-datepicker-header
              th.am-datepicker-prev
                i.am-datepicker-prev-icon(@click='monthShow=monthPrevDate')
              th.am-datepicker-switch(colspan='5')
                .am-datepicker-select(@click='showType="year"') {{monthSelect}}
              th.am-datepicker-next
                i.am-datepicker-next-icon(@click='monthShow=monthEndDate')
          tbody
            tr
              td(colspan='7')
                span.am-datepicker-month(v-for='month in monthPresent', :class='monthClasses(month)', @click='OnSelectMonth(month)') {{Locales.months[month.month]}}
      .am-datepicker-years(v-show='showType==="year"')
        table.am-datepicker-table
          thead
            tr.am-datepicker-header
              th.am-datepicker-prev
                i.am-datepicker-prev-icon(@click='yearShow=yearStartDate')
              th.am-datepicker-switch(colspan='5')
                .am-datepicker-select {{yearSelect}}
              th.am-datepicker-next
                i.am-datepicker-next-icon(@click='yearShow=yearEndDate')
          tbody
            tr
              td(colspan='7')
                span(v-for='year in yearPresent', :class='yearClasses(year)', @click='OnSelectYear(year)') {{year.year}}
</template>

<script>
import $ from './utils/extendHtmlElement'
import * as DateHelper from './utils/dateHelper'
const Locales = {
  days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  daysMin: ['日', '一', '二', '三', '四', '五', '六'],
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  weekStart: 1,
  year: ['年']
}
export default {
  props: {
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: 'secondary'
    },
    mode: {
      type: String,
      default: 'day'
    },
    format: {
      type: String,
      default: 'yyyy-mm-dd'
    },
    min: String,
    max: String
  },
  data () {
    return {
      Locales,
      show: false,
      showtype: 'day',
      dayShow: new Date(),
      monthShow: new Date(),
      yearShow: new Date()
    }
  },
  computed: {
    date: {
      get () {
        return DateHelper.parseDate(this.value, this.format)
      },
      set (newVal) {
        let value = DateHelper.formatDate(newVal, this.format)
        this.$emit('input', value)
      }
    },
    showType: {
      get () {
        return this.showtype
      },
      set (newVal) {
        switch (newVal) {
        case 'day':
          if (this.mode !== 'year' && this.mode !== 'month') this.showtype = newVal
          break
        case 'month':
          if (this.mode !== 'year') this.showtype = newVal
          break
        default:
          this.showtype = newVal
        }
      }
    },
    contentClasses () {
      return `am-datepicker-${this.type}`
    },
    maxDate () {
      return this.max ? DateHelper.parseDate(this.max, this.format) : null
    },
    minDate () {
      return this.min ? DateHelper.parseDate(this.min, this.format) : null
    },
    daysSelect () {
      let dayShow = this.dayShow
      return dayShow.getFullYear() + Locales.year[0] + ' ' + Locales.months[dayShow.getMonth()]
    },
    monthSelect () {
      let monthShow = this.monthShow
      return monthShow.getFullYear()
    },
    yearSelect () {
      let yearShow = this.yearShow
      let year = yearShow.getFullYear()
      year = (year - (year % 10))
      return year + '-' + (year + 10)
    },
    dayStartDate () {
      let dayShow = this.dayShow
      let prevMonth = new Date(dayShow.getFullYear(), dayShow.getMonth() - 1, 1, 0, 0, 0, 0)
      let daysInMonth = DateHelper.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth())
      prevMonth.setDate(daysInMonth)
      prevMonth.setDate(daysInMonth - (prevMonth.getDay() - Locales.weekStart + 7) % 7)
      return prevMonth
    },
    dayEndDate () {
      let prevMonth = this.dayStartDate
      let nextMonth = new Date(prevMonth)
      nextMonth.setDate(nextMonth.getDate() + 42)
      return nextMonth
    },
    daysPresent () {
      let startDate = this.dayStartDate, endDate = this.dayEndDate
      let maxDate = this.maxDate, minDate = this.minDate
      let date = new Date(startDate)
      let present = [], week = []
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
          disabled: (minDate && date <= minDate) || (maxDate && date > maxDate)
        })
        if (date.getDay() === ((Locales.weekStart + 6) % 7)) {
          present.push(week)
          week = []
        }
        date.setDate(date.getDate() + 1)
      }
      present.push(week)
      return present
    },
    monthPrevDate () {
      let monthShow = this.monthShow
      return new Date(monthShow.getFullYear() - 1, 0, 1, 0, 0, 0, 0)
    },
    monthStartDate () {
      let monthShow = this.monthShow
      return new Date(monthShow.getFullYear(), 0, 1, 0, 0, 0, 0)
    },
    monthEndDate () {
      let monthShow = this.monthShow
      return new Date(monthShow.getFullYear() + 1, 0, 1, 0, 0, 0, 0)
    },
    monthPresent () {
      let startDate = this.monthStartDate, endDate = this.monthEndDate
      let maxDate = this.maxDate, minDate = this.minDate
      let date = new Date(startDate), present = []
      while (date.valueOf() < endDate.valueOf()) {
        present.push({
          date: new Date(date),
          month: date.getMonth(),
          disabled: (minDate && date <= minDate) || (maxDate && date > maxDate)
        })
        date.setMonth(date.getMonth() + 1)
      }
      return present
    },
    yearStartDate () {
      let yearShow = this.yearShow
      let year = yearShow.getFullYear()
      year = (year - (year % 10))
      return new Date(year - 1, 0, 1, 0, 0, 0, 0)
    },
    yearEndDate () {
      let startDate = this.yearStartDate
      return new Date(startDate.getFullYear() + 12, 0, 1, 0, 0, 0, 0)
    },
    yearPresent () {
      let startDate = this.yearStartDate, endDate = this.yearEndDate
      let maxDate = this.maxDate, minDate = this.minDate
      let date = new Date(startDate), present = []
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
          disabled: (minDate && date <= minDate) || (maxDate && date > maxDate)
        })
        date.setFullYear(date.getFullYear() + 1)
      }
      return present
    }
  },
  mounted () {
    this._datepicker = new $(this.$refs.datepicker)
    this._content = new $(this.$refs.content)
    this._body = new $(document)
  },
  watch: {
    show (newVal) {
      if (newVal) {
        this.open()
        this.$emit('open')
      } else {
        this.close()
        this.$emit('close')
      }
    }
  },
  methods: {
    open () {
      this.showType = 'day'
      this.dayShow = new Date(this.date)
      this.monthShow = new Date(this.date)
      this.yearShow = new Date(this.date)
      let datepicker = this._datepicker, content = this._content, body = this._body
      datepicker.addClass('am-active')
      content.addClass('am-animation-slide-top-fixed')
      this._bodyClick = e => {
        if (!content.element.contains(e.target) && e.target !== content.element && this._active) {
          this.show = false
          body.off('click', this._bodyClick)
          content.off('transitionend animationend')
        }
      }
      body.on('click', this._bodyClick)
      content.on('transitionend animationend', () => {
        content.off('transitionend animationend')
          .removeClass('am-animation-slide-top-fixed')
        this._active = true
      })
    },
    close () {
      let datepicker = this._datepicker, content = this._content, body = this._body
      this._active = false
      body.off('click', this._bodyClick)
      window.removeEventListener('resize', this._windowResize)
      content.addClass('am-dropdown-animation')
        .on('transitionend animationend', () => {
          content.off('transitionend animationend')
            .removeClass('am-dropdown-animation')
          datepicker.removeClass('am-active')
        })
    },
    dayClasses (day) {
      return {
        'am-datepicker-old': day.type === 'old',
        'am-active': day.date.getFullYear() === this.date.getFullYear() &&
                     day.date.getMonth() === this.date.getMonth() &&
                     day.date.getDate() === this.date.getDate(),
        'am-datepicker-new': day.type === 'new',
        'am-disabled': day.disabled
      }
    },
    monthClasses (month) {
      return {
        'am-active': month.date.getFullYear() === this.date.getFullYear() &&
                     month.date.getMonth() === this.date.getMonth(),
        'am-disabled': month.disabled
      }
    },
    yearClasses (year) {
      return {
        'am-datepicker-old': year.type === 'old' || year.type === 'new',
        'am-active': year.date.getFullYear() === this.date.getFullYear(),
        'am-disabled': year.disabled
      }
    },
    OnClickToggle () {
      this.show = !this.show
    },
    OnSelectDay (day) {
      if (!day.disabled) {
        this.date = day.date
      }
    },
    OnSelectMonth (month) {
      if (!month.disabled) {
        let newDate = new Date(month.date.getFullYear(), month.date.getMonth(), this.date.getDate(), 0, 0, 0, 0)
        this.date = new Date(newDate)
        this.dayShow = new Date(newDate)
        this.showType = 'day'
      }
    },
    OnSelectYear (year) {
      if (!year.disabled) {
        let newDate = new Date(year.date.getFullYear(), this.date.getMonth(), this.date.getDate(), 0, 0, 0, 0)
        this.date = new Date(newDate)
        this.monthShow = new Date(newDate)
        this.showType = 'month'
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-date-picker {
  position: relative;
  width: 100%;
}

.am-datepicker-dropdown {
  position: absolute;
  top: 100%;
}

.am-date-picker-btn {
  width: 100%;
  padding-left: 10px;
  text-align: right;
  &.am-btn-default {
    background: none;
  }
}

.am-selected-placeholder,
.am-date-picker-status {
  width: auto;
  white-space: normal;
  text-align: left;
  display: block;
  word-wrap: normal;
  overflow: hidden;
  min-height: 19px;
}

.am-selected-placeholder {
  opacity: .65;
}

.am-datepicker-dropdown:before {
  left: 10px;
  top: -8px;
  pointer-events: none;
  bottom: 0;
  border-bottom-style: solid;
  position: absolute;
  display: block;
  content: "";
  width: 0;
  height: 0;
  border: 8px dashed transparent;
  border-width: 0 8px 8px 8px;
  border-bottom-color: @global-secondary;
  z-index: 1;
}

.am-datepicker-dropdown.am-datepicker-success:before {
  border-bottom-color: @global-success;
}

.am-datepicker-dropdown.am-datepicker-warning:before {
  border-bottom-color: @global-warning;
}

.am-datepicker-dropdown.am-datepicker-danger:before {
  border-bottom-color: @global-danger;
}

.am-date-picker.am-active .am-datepicker-dropdown {
  display: block;
}

</style>
