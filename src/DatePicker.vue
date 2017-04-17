<template lang='jade'>
  .am-date-picker.am-dropdown(ref='datepicker')
    am-button.am-date-picker-btn.am-dropdown-toggle(:active='show', @click='OnClickToggle')
      span.am-selected-placeholder.am-fl(v-if='!value') {{ placeholder }}
      span.am-selected-status.am-fl(v-else) {{ value }}
    transition(
      name='am-select-transition',
      enter-active-class='am-animation-slide-top-fixed',
      leave-active-class='am-dropdown-animation',
      @after-enter='AfterOpen',
      @before-leave='BeforeClose')
      .am-datepicker.am-datepicker-dropdown(v-if='show', :class='contentClasses', ref='content')
        date-picker-days(
          v-if='prior[mode] <= prior.day'
          v-show='showType === "day"',
          :date='date',
          :locales='locales',
          :minDate='minDate',
          :maxDate='maxDate',
          @goUpper='showType = "month"',
          @select='date = $event')
        date-picker-monthes(
          v-if='prior[mode] <= prior.month'
          v-show='showType === "month"',
          :date='date',
          :locales='locales',
          :minDate='minDate',
          :maxDate='maxDate',
          @goUpper='showType = "year"',
          @select='date = $event, showType = "day"')
        date-picker-years(
          v-if='prior[mode] <= prior.year'
          v-show='showType === "year"',
          :date='date',
          :locales='locales',
          :minDate='minDate',
          :maxDate='maxDate',
          @select='date = $event, showType = "month"')
</template>

<script>
import * as DateHelper from './utils/dateHelper'
import AmButton from './Button'
import DatePickerDays from './DatePickerDays'
import DatePickerMonthes from './DatePickerMonthes'
import DatePickerYears from './DatePickerYears'

const locales = {
  days: [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
  daysShort: [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
  daysMin: [ '日', '一', '二', '三', '四', '五', '六' ],
  months: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
  monthsShort: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
  weekStart: 1,
  year: [ '年' ],
}
const prior = {
  day: 0,
  month: 1,
  year: 2,
}

export default {
  name: 'AmDatePicker',
  props: {
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: 'secondary',
    },
    mode: {
      type: String,
      default: 'day',
    },
    format: {
      type: String,
      default: 'yyyy-mm-dd',
    },
    min: String,
    max: String,
  },
  components: {
    DatePickerDays,
    DatePickerMonthes,
    DatePickerYears,
    AmButton,
  },
  data () {
    return {
      locales,
      prior,
      show: false,
      active: false,
      showtype: 'day',
    }
  },
  computed: {
    date: {
      get () {
        return DateHelper.parseDate(this.value, this.format)
      },
      set (newVal) {
        const value = DateHelper.formatDate(newVal, this.format)
        this.$emit('input', value)
      },
    },
    showType: {
      get () {
        return this.showtype
      },
      set (newVal) {
        if (prior[newVal] >= prior[this.mode]) {
          this.showtype = newVal
        } else if (prior[this.mode] > prior[newVal]) {
          this.showtype = this.mode
        }
      },
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
  },
  watch: {
    show (newVal) {
      if (newVal) {
        this.showType = 'day'
      }
    },
  },
  created () {
    this.$on('open', () => {
      this.show = true
    })
    this.$on('close', () => {
      this.show = true
    })
    this.$on('toggle', () => {
      this.show = !this.show
    })
    this._documentListener = e => {
      const content = this.$refs.content
      if (this.active && content && !content.contains(e.target) && content !== e.target) {
        this.show = false
      }
    }
    document.addEventListener('click', this._documentListener)
  },
  beforeDestroy () {
    document.removeEventListener('click', this._documentListener)
  },
  methods: {
    AfterOpen () {
      this.active = true
    },
    BeforeClose () {
      this.active = false
    },
    OnClickToggle () {
      this.show = !this.show
    },
  },
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-date-picker {
  position: relative;
  width: 100%;
}

.am-datepicker-dropdown {
  display: block;
  position: absolute;
  top: 100%;
}

.am-date-picker-btn {
  width: 100%;
  padding-left: 10px;
  text-align: right;
  background: white;
  border-color: @input-group-label-border-color;
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
