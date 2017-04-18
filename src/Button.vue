<template lang='jade'>
  button.am-btn(:type='nativeType', :class='classes', @click='onClick')
    i.am-margin-right-xs(v-if='icon', :class='`am-icon-${icon}`')
    slot
</template>

<script>
export default {
  name: 'AmButton',
  props: {
    size: {
      type: String,
      default: 'md',
    },
    shape: {
      type: String,
      default: 'square',
    },
    type: {
      type: String,
      default: 'default',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: String,
  },
  computed: {
    classes () {
      return {
        [`am-btn-${this.size}`]: true,
        [`am-${this.shape}`]: true,
        [`am-btn-${this.type}`]: true,
        'am-active': this.active,
        'am-disabled': this.disabled,
      }
    },
  },
  methods: {
    onClick (e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    },
  },
}
</script>
