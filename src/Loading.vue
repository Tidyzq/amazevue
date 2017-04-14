<template lang='jade'>
.am-loading-wrapper
  slot
  transition(name='loading')
    .am-loading-mask(v-show='loading')
      .am-loading-spinner
        .am-loading-icon.am-icon-spinner.am-icon-spin
        div {{ text }}
</template>

<script>
export default {
  name: 'AmLoading',
  props: {
    loading: Boolean,
    text: String
  },
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
.am-loading-wrapper {
  position: relative;
  overflow: auto;
}

.am-loading-mask {
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.am-loading-spinner {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  position: absolute;
}

.am-loading-icon {
  width: 32px;
  height: 32px;
  &:before {
    font-size: 32px;
  }
}

.loading-enter-active,
.loading-leave-active {
  transition: all .3s ease;
}

.loading-enter, .loading-leave-to {
  opacity: 0;
}
</style>
