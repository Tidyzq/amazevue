<template lang='jade'>
  label.am-radio(:class='classes')
    input.am-ucheck-radio(type='radio', v-model='model', :name='name', :value='label', :disabled='disabled')
    span.am-ucheck-icons
      i.am-icon-unchecked
      i.am-icon-checked
    slot
</template>

<script>
export default {
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      _radioGroup: null
    }
  },
  created () {
    var radioGroup = this
    while (radioGroup && radioGroup._radioGroup !== true && radioGroup.$parent) {
      radioGroup = radioGroup.$parent
    }
    if (!radioGroup._radioGroup) {
      // not in radio group
      this._radioGroup = null
    } else {
      // in radio group
      this._radioGroup = radioGroup
    }
  },
  computed: {
    model: {
      get () {
        if (this._radioGroup) {
          return this._radioGroup.value
        } else {
          return this.value
        }
      },
      set (newVal) {
        if (this._radioGroup) {
          this._radioGroup.$emit('input', newVal)
        } else {
          this.$emit('input', newVal)
        }
      }
    },
    classes () {
      return {
        'am-disabled': this.disabled,
        'am-secondary': this.type === 'secondary',
        'am-success': this.type === 'success',
        'am-warning': this.type === 'warning',
        'am-danger': this.type === 'danger'
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-radio {
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: @global-spacing-xs;
  & + & {
    margin-top: 0;
    margin-bottom: 0;
  }
  .am-ucheck-radio {
    margin: 0 !important;
  }
  .am-ucheck-radio, .am-ucheck-icons {
    top: auto;
    bottom: 0;
  }
  &.am-disabled {
    color: @input-bg-disabled;
    .am-ucheck-icons {
      color: @input-bg-disabled !important;
    }
  }
}

</style>
