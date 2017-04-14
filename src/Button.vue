<template lang='jade'>
  button.am-btn(:type='nativeType', :class='classes', @click='onClick')
    i(v-if='icon', :class='"am-icon-"+icon')
    slot
</template>

<script>
export default {
  name: 'AmButton',
  props: {
    size: {
      type: String,
      default: 'md'
    },
    shape: {
      type: String,
      default: 'square'
    },
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String
  },
  computed: {
    classes () {
      return {
        'am-btn-xl': this.size === 'xl',
        'am-btn-lg': this.size === 'lg',
        'am-btn-sm': this.size === 'sm',
        'am-btn-xs': this.size === 'xs',
        'am-radius': this.shape === 'radius',
        'am-round': this.shape === 'round',
        'am-btn-default': this.type === 'default',
        'am-btn-primary': this.type === 'primary',
        'am-btn-secondary': this.type === 'secondary',
        'am-btn-success': this.type === 'success',
        'am-btn-warning': this.type === 'warning',
        'am-btn-danger': this.type === 'danger',
        'am-active': this.active,
        'am-disabled': this.disabled
      }
    }
  },
  methods: {
    onClick (e) {
      if (!this.disabled) this.$emit('click', e)
    }
  }
}
</script>
