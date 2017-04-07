<template lang="jade">
.modal-wrapper
  transition(
    name='am-modal-transition',
    @after-enter='handleAfterOpen',
    @before-leave='handleBeforeClose',
    leave-active-class='am-modal-out')
      .am-modal.am-modal-no-btntab(v-show='show', ref='modal', :class='{"am-modal-active": active}', tabindex='-1', :style='{"z-index": 1010 + 20 * zIndex}', @click='handleDimmerClick')
        .am-modal-dialog
          .am-modal-hd {{ title }}
            a.am-close.am-close-spin(v-if='closeButton', @click.prevent='show = false') &times;
          .am-modal-bd
            slot
          .am-modal-footer(v-if='$slots.footer')
            slot(name='footer')
    .am-dimmer(v-show='show', :class='{"am-active": active}', :style='{"z-index": 1000 + 20 * zIndex}')
</template>

<script>
export default {
  props: {
    title: String,
    value: {
      type: Boolean,
      default: false
    },
    closeButton: Boolean,
    dimmerClose: Boolean,
    zIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      active: false,
      show: this.value
    }
  },
  watch: {
    show (newVal) {
      if (newVal) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
      this.$emit('input', newVal)
    },
    value (newVal) {
      this.show = newVal
    }
  },
  methods: {
    handleAfterOpen () {
      this.$nextTick(() => {
        this.active = true
      })
    },
    handleBeforeClose () {
      this.active = false
    },
    open () {
      this.show = true
    },
    close () {
      this.close = false
    },
    handleDimmerClick (e) {
      if (this.dimmerClose && e.target === this.$refs.modal) {
        this.show = false
      }
    }
  }
}

</script>

<style lang='less' scoped>
.am-modal, .am-dimmer {
  display: block;
}
</style>
