<template lang='jade'>
li.am-sub-nav-item.am-nav-item
  a(@click='handleClick')
    slot(name='title')
    span.am-sub-nav-caret.am-fr.am-icon-caret-right(:class=`{
      'am-sub-nav-caret-open': collapse
    }`)
  collapse-transition(:show='collapse')
    ul.am-sub-nav.am-nav
      slot
</template>

<script>
import CollapseTransition from './CollapseTransition'

export default {
  name: 'AmSubNav',
  props: {
    defaultActive: Boolean,
    disabled: Boolean,
  },
  components: {
    CollapseTransition,
  },
  data () {
    return {
      rootNav: null,
      parentNav: null,
      items: [],
      collapse: false,
    }
  },
  created () {
    this._subnav = true
    let nav = this.$parent, subnav = this.$parent
    while (nav && !nav._nav && nav.$parent) {
      nav = nav.$parent
    }
    while (subnav && !subnav._subnav && subnav.$parent) {
      subnav = subnav.$parent
    }
    if (nav._nav) {
      this.rootNav = nav
      this.parentNav = subnav._subnav ? subnav : nav
    } else {
      throw new Error('SubNav needs Nav to work')
    }
    if (this.defaultActive) {
      this.rootNav.active = this.index
    }
    this.parentNav.items.push(this)
  },
  computed: {
    active () {
      return this.items.some(item => item.active)
    },
  },
  watch: {
    active (newVal) {
      if (newVal) {
        this.collapse = true
      }
    },
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.collapse = !this.collapse
      }
    },
  },
}
</script>

<style lang='less' scoped>

.am-nav-item {
  cursor: pointer
}

.am-sub-nav, .am-sub-nav-item {
  margin-top: 0;
}

.am-sub-nav {
  padding-left: 20px;
}

.am-sub-nav-caret {
  transition: all .3s ease;
}

.am-sub-nav-caret-open {
  transform: rotate(90deg);
}

</style>
