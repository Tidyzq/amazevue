<template lang='jade'>
  li(:class='classes', @click='OnClick')
    span.am-selected-text {{label}}
    i.am-icon-check
</template>

<script>
export default {
  props: {
    value: [String, Number, Boolean],
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      _select: null
    }
  },
  created () {
    var select = this
    while (select && select._select !== true && select.$parent) {
      select = select.$parent
    }
    if (!select._select) {
      // not in select
      this._select = null
      console.warn('Option needs Select to work')
    } else {
      // in select
      this._select = select
      this.$set(this._select.options, this.value, this.label)
    }
  },
  watch: {
    value (newVal, oldVal) {
      if (this._select) {
        this.$delete(this._select.options, oldVal)
        this.$set(this._select.options, newVal, this.label)
      }
    },
    label (newVal) {
      if (this._select) {
        this.$set(this._select.options, this.value, newVal)
      }
    }
  },
  beforeDestroy () {
    if (this._select) {
      this.$delete(this._select.options, this.value)
    }
  },
  computed: {
    checked () {
      if (this._select) {
        if (this._select.multiple) {
          return Array.isArray(this._select.value) && this._select.value.indexOf(this.value) !== -1
        } else {
          return this._select.value === this.value
        }
      }
      return false
    },
    classes () {
      return {
        'am-checked': this.checked,
        'am-disabled': this.disabled
      }
    }
  },
  methods: {
    OnClick () {
      if (this._select) {
        this._select.$emit('select', this.value)
      }
    }
  }
}
</script>
