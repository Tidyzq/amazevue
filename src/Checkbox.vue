<template lang='jade'>
  label.am-checkbox(:class='classes')
    input.am-ucheck-checkbox(type='checkbox', v-model='model', :name='name', :value='label', :disabled='disabled')
    span.am-ucheck-icons
      i.am-icon-unchecked
      i.am-icon-checked
    slot
</template>

<script>
export default {
  name: 'AmCheckbox',
  props: {
    value: [Boolean, Array],
    label: [String, Number, Object],
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
      _checkboxGroup: null
    }
  },
  created () {
    var checkboxGroup = this
    while (checkboxGroup && checkboxGroup._checkboxGroup !== true && checkboxGroup.$parent) {
      checkboxGroup = checkboxGroup.$parent
    }
    if (!checkboxGroup._checkboxGroup) {
      // not in checkbox group
      this._checkboxGroup = null
    } else {
      // in checkbox group
      this._checkboxGroup = checkboxGroup
    }
  },
  computed: {
    model: {
      get () {
        if (this._checkboxGroup) {
          return this._checkboxGroup.value
        } else {
          return this.value
        }
      },
      set (newVal) {
        if (this._checkboxGroup) {
          this._checkboxGroup.$emit('input', newVal)
          this._checkboxGroup.$emit('select', this.label)
        } else {
          this.$emit('input', newVal)
          this.$emit('select', this.label)
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

<style lang='less'>
@import './less/variables.less';

.am-checkbox {
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-right: @global-spacing-xs;
  & + & {
    margin-top: 0;
    margin-bottom: 0;
  }
  .am-ucheck-checkbox {
    margin: 0 !important;
  }
  .am-ucheck-checkbox, .am-ucheck-icons {
    margin: auto;
    top: 0;
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
