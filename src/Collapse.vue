<template lang='jade'>
.am-panel(:class=`{
    'am-panel-default': type === 'default',
    'am-panel-primary': type === 'primary',
    'am-panel-secondary': type === 'secondary',
    'am-panel-success': type === 'success',
    'am-panel-warning': type === 'warning',
    'am-panel-danger': type === 'danger'
  }`)
  .am-panel-hd(@click='handleTitleClick')
    h4.am-panel-title
      template(v-if='$slots.title')
        slot(name='title')
      template(v-else) {{ title }}
  transition(
    @before-enter='handleBeforeEnter',
    @after-enter='handleAfterEnter',
    @before-leave='handleBeforeLeave',
    @after-leave='handleAfterLeave',
    enter-active-class='am-collapsing'
    leave-active-class='am-collapsing')
    .am-panel-collapse(v-show='show', :style='collapseStyle')
      .am-panel-bd(ref='panelBd')
        slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title: String,
    name: {
      type: [Number, String, Boolean],
      required: true
    }
  },
  data () {
    return {
      animatingClientHeight: false,
      animatingZeroHeight: false,
      collapseSet: null
    }
  },
  created () {
    let collapseSet = this
    while (collapseSet && !collapseSet._collapseSet && collapseSet.$parent) {
      collapseSet = collapseSet.$parent
    }
    if (collapseSet._collapseSet) {
      this.collapseSet = collapseSet
    } else {
      throw new Error('Collapse needs CollapseSet to work')
    }
  },
  computed: {
    show () {
      if (!this.collapseSet) return false
      let show = this.collapseSet.show
      if (this.collapseSet.accordion) {
        return !Array.isArray(show) && show === this.name
      } else {
        return Array.isArray(show) && show.some(item => item === this.name)
      }
    },
    collapseStyle () {
      let style = {}
      if (this.animatingClientHeight) {
        style['height'] = this.$refs.panelBd.clientHeight + 'px'
      }
      if (this.animatingZeroHeight) {
        style['height'] = '0px'
      }
      return style
    }
  },
  watch: {
    show (newVal, oldVal) {
      if (!newVal && oldVal) {
        this.animatingClientHeight = true
      }
    }
  },
  methods: {
    handleTitleClick () {
      if (this.collapseSet.accordion) {
        this.collapseSet.show = this.show ? null : this.name
      } else {
        let show = this.collapseSet.show
        if (this.show) {
          show.splice(show.indexOf(this.name), 1)
        } else {
          show.push(this.name)
        }
      }
    },
    handleBeforeEnter () {
      this.animatingClientHeight = true
    },
    handleAfterEnter () {
      this.animatingClientHeight = false
    },
    handleBeforeLeave () {
      this.animatingZeroHeight = true
    },
    handleAfterLeave () {
      this.animatingClientHeight = false
      this.animatingZeroHeight = false
    }
  }
}
</script>

<style lang='less' scoped>

.am-panel-hd {
  cursor: pointer;
}

</style>
