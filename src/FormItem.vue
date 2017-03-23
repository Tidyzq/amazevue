<template lang='jade'>
  am-row.am-form-item
    am-col(:span='labelSpan')
      label.am-form-item-label {{label}}
    am-col(:span='contentSpan')
      slot
</template>

<script>
import AmRow from './Row'
import AmCol from './Col'

export default {
  props: {
    label: String
  },
  components: {
    AmRow,
    AmCol
  },
  computed: {
    labelSpan () {
      return this._form ? this._form.labelSpan : 2
    },
    contentSpan () {
      if (this._form) {
        return this._form.labelPosition === 'top' ? 12 : 12 - this.labelSpan
      }
      return 12 - this.labelSpan
    }
  },
  created () {
    var form = this
    while (form && form._form !== true && form.$parent) {
      form = form.$parent
    }
    if (!form._form) {
      // not in form
      this._form = null
      console.warn('FormItem needs Form to work')
    } else {
      // in form
      this._form = form
    }
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-form-item-label {
  display: inline-block;
  width: 100%;
  margin: 0;
}

.am-form-label-left, .am-form-label-right {
  .am-form-item-label {
    padding: 6px 18px 6px 0;
  }
}

.am-form-label-top {
  .am-form-item-label {
    padding: 0 0 6px 0;
  }
}

.am-form-label-left, .am-form-label-top {
  .am-form-item-label {
    text-align: left;
  }
}

.am-form-label-right {
  .am-form-item-label {
    text-align: right;
  }
}

.am-form-item {
  margin-bottom: @global-spacing-sm;
}
</style>
