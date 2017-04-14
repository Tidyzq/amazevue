<template lang='jade'>
.am-alert(v-show='show', :class=`{
    'am-alert-default': type === 'default',
    'am-alert-primary': type === 'primary',
    'am-alert-secondary': type === 'secondary',
    'am-alert-success': type === 'success',
    'am-alert-warning': type === 'warning',
    'am-alert-danger': type === 'danger'
  }`)
  span.am-alert-close.am-close.am-close-spin(v-if='closeable', type='button', @click='handleClose') &times;
  i.am-alert-icon.am-margin-horizontal-xs(v-if='showIcon', :class=`{
      'am-icon-info-circle': type === 'default' || type === 'primary' || type === 'secondary',
      'am-icon-check-circle': type === 'success',
      'am-icon-exclamation-circle': type === 'warning',
      'am-icon-times-circle': type === 'danger',
      'am-alert-icon-big': Boolean(description)
    }`)
  .am-alert-content
    span.am-alert-title {{ title }}
    span.am-alert-description {{ description }}
  slot
</template>

<script>
export default {
  name: 'AmAlert',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title: String,
    description: String,
    value: {
      type: Boolean,
      default: true
    },
    closeable: Boolean,
    showIcon: Boolean
  },
  data () {
    return {
      show: Boolean(this.value)
    }
  },
  watch: {
    value (newVal) {
      this.show = newVal
    }
  },
  methods: {
    handleClose () {
      this.show = false
      this.$emit('input', false)
      this.$emit('close')
    }
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.alert-variant(@background; @border; @text-color) {
  background-color: @background;
  border-color: @border;
  color: @text-color;
}

.am-alert-default {
  .alert-variant(@gray-lighter, darken(@gray-lighter, 6%), @gray);
}

.am-alert-secondary {
  .alert-variant(@global-secondary, darken(@global-secondary, 6%), #fff);
}

.am-alert-icon, .am-alert-content {
  display: inline-block;
}

.am-alert-icon {
  float: left;
}

.am-alert-icon-big::before {
  font-size: @font-size-xxxl;
}

.am-alert-title, .am-alert-description {
  display: block;
}

.am-alert-title {
  font-weight: bold;
}

</style>
