<template lang='jade'>
  am-col(:span='span', :offset='offset')
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
  name: 'AmFormItem',
  props: {
    label: String,
    prop: String,
    span: [ Number, Object ],
    offset: [ Number, Object ],
  },
  components: {
    AmRow,
    AmCol,
  },
  computed: {
    position () {
      return this._form.labelPosition
    },
    labelSpan () {
      return this.position === 'top' ? 12 : this._form.labelSpan
    },
    contentSpan () {
      return this.position === 'top' ? 12 : this._form.contentSpan
    },
  },
  watch: {
    prop (newVal, oldVal) {
      if (this._form) {
        if (oldVal) {
          this.$delete(this._form.props, oldVal)
        }
        if (newVal) {
          this.$set(this._form.props, newVal, this)
        }
      }
    },
  },
  created () {
    var form = this
    while (form && form._form !== true && form.$parent) {
      form = form.$parent
    }
    if (!form._form) {
      // not in form
      this._form = null
      throw new Error('FormItem needs Form to work')
    } else {
      // in form
      this._form = form
      if (this.prop) {
        this.$set(form.props, this.prop, this)
      }
    }
  },
  beforeDestroy () {
    if (this._form && this.prop) {
      this.$delete(this._form.props, this.prop)
    }
  },
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
