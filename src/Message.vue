<template lang='jade'>
transition(
    name='message'
  )
  am-alert.am-message(v-show='show', v-model='model', :type='type', :title='title', :description='message', show-icon, :closeable='!Boolean(duration)', :class=`{
      'am-message-top': placement === 'top',
      'am-message-top-left': placement === 'top-left',
      'am-message-top-right': placement === 'top-right',
    }`, :style=`{
      'width': width + 'px'
    }`)
</template>

<script>
import AmAlert from './Alert'

export default {
  name: 'AmMessage',
  components: {
    AmAlert,
  },
  props: {
    title: String,
    message: String,
    type: {
      type: String,
      default: 'default',
    },
    placement: {
      type: String,
      default: 'top',
    },
    width: {
      type: Number,
      default: 300,
    },
    value: {
      type: Boolean,
      default: false,
    },
    duration: Number,
  },
  data () {
    return {
      show: Boolean(this.value),
    }
  },
  computed: {
    model: {
      get () {
        return true
      },
      set (newVal) {
        this.show = newVal
      },
    },
  },
  watch: {
    value (newVal) {
      this.show = newVal
    },
    show (newVal) {
      if (newVal) {
        if (this.duration) {
          this._timeout = setTimeout(() => {
            this.show = false
            this._timeout = null
          }, this.duration)
        }
      } else {
        if (this._timeout) {
          clearTimeout(this._timeout)
          this._timeout = null
        }
      }
      this.$emit('input', newVal)
    },
  },
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

.am-message {
  margin: 0;
  max-width: 60%;
}

.am-message-top, .am-message-top-left, .am-message-top-right {
  position: fixed;
  z-index: 10010;
  top: @global-spacing-sm;
}

.am-message-top {
  left: 0;
  right: 0;
  margin: 0 auto;
}

.am-message-top-left {
  left: @global-spacing;
}

.am-message-top-right {
  right: @global-spacing;
}

.am-message-animation {
  animation-duration: .3s;
  animation-timing-function: ease;
}

.message-enter-active,
.message-leave-active {
  transition: all .3s ease;
}

.message-enter, .message-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

</style>
