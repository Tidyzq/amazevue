<template lang='jade'>
transition(
  @before-enter='handleBeforeEnter',
  @after-enter='handleAfterEnter',
  @after-leave='handleAfterLeave',
  enter-active-class='am-collapsing'
  leave-active-class='am-collapsing')
  .am-collapse-transition(v-show='show', :style='collapseStyle')
    .am-collapse-body(ref='transitionBody')
      slot
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  data () {
    return {
      animatingClientHeight: false,
      animatingZeroHeight: false,
    }
  },
  computed: {
    collapseStyle () {
      const style = {}
      if (this.animatingClientHeight) {
        style.height = this.$refs.transitionBody.clientHeight + 'px'
      }
      if (this.animatingZeroHeight) {
        style.height = '0px'
      }
      return style
    },
  },
  watch: {
    show (newVal, oldVal) {
      if (!newVal && oldVal) {
        this.handleBeforeLeave()
      }
    },
  },
  methods: {
    handleBeforeEnter () {
      this.animatingClientHeight = true
    },
    handleAfterEnter () {
      this.animatingClientHeight = false
    },
    handleBeforeLeave () {
      this.animatingClientHeight = true
      this.$nextTick(() => {
        this.animatingZeroHeight = true
      })
    },
    handleAfterLeave () {
      this.animatingClientHeight = false
      this.animatingZeroHeight = false
    },
  },
}
</script>
