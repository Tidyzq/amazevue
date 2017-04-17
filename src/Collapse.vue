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
  .am-panel-collapse
    collapse-transition(:show='show')
      .am-panel-bd
        slot
</template>

<script>
import CollapseTransition from './CollapseTransition'

export default {
  name: 'AmCollapse',
  components: {
    CollapseTransition
  },
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
    }
  }
}
</script>

<style lang='less' scoped>

.am-panel-hd {
  cursor: pointer;
}

</style>
