<template lang='jade'>
.am-topbar(:class=`{
    'am-topbar-inverse': inverse,
    'am-topbar-fixed-top': fixed === 'top',
    'am-topbar-fixed-bottom': fixed === 'bottom',
  }`)
  am-button.am-topbar-btn.am-topbar-toggle.am-show-sm-only(size='sm', type='success', @click='handleCollapseToggle')
    span.am-sr-only ...
    span.am-icon-bars
  .am-topbar-collapse(:class=`{
      'am-collapse': !collapsing,
      'am-collapsing': collapsing,
      'am-in': show
    }`, :style='collapseStyle', ref='collapse')
    .am-topbar-collapse-body(ref='collapseBody')
      ul.am-nav.am-nav-pills.am-topbar-nav
        li.am-active: a 1
        li: a 2
        li: a 3
        li: a 4
        li: a 5
</template>

<script>
import AmButton from './Button'

export default {
  name: 'AmTopbar',
  props: {
    inverse: Boolean,
    fixed: {
      type: String,
      default: 'none',
    },
  },
  components: {
    AmButton,
  },
  data () {
    return {
      show: false,
      collapsing: false,
      collapseClientHeight: false,
      collapseZeroHeight: false,
    }
  },
  computed: {
    collapseStyle () {
      const style = {}
      if (this.collapseClientHeight) {
        style.height = this.$refs.collapseBody.clientHeight + 'px'
      }
      if (this.collapseZeroHeight) {
        style.height = '0px'
      }
      return style
    },
  },
  methods: {
    handleCollapseToggle () {
      if (this.show) {
        this.collapseClientHeight = true
        this.$nextTick(() => {
          this.collapseZeroHeight = true
          this.show = false
          this.collapsing = true
        })
        const temp = this.$refs.collapse.addEventListener('transitionend', () => {
          this.collapseClientHeight = false
          this.collapseZeroHeight = false
          this.collapsing = false
          this.$refs.collapse.removeEventListener('transitionend', temp)
        })
      } else {
        this.show = true
        this.collapsing = true
        this.$nextTick(() => {
          this.collapseClientHeight = true
        })
        const temp = this.$refs.collapse.addEventListener('transitionend', () => {
          this.collapseClientHeight = false
          this.collapsing = false
          this.$refs.collapse.removeEventListener('transitionend', temp)
        })
      }
    },
  },
}
</script>

<style lang='less' scoped>

.am-topbar-collapse {
  padding: 0;
}

.am-topbar-collapse-body {
  padding: 10px;
}

@media only screen and (min-width: 641px) {
  .am-topbar-collapse-body {
    padding: 0px;
  }
}

.am-topbar-nav {
  margin-bottom: 0 !important;
}

</style>
