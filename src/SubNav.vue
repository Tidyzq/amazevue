<template lang='jade'>
li.am-sub-nav-item.am-nav-item(:class=`{
    'am-active': useDropdown && active
  }`)
  a(@click='handleClick', :style=`{
      'padding-left': useDropdown ? false : padding + 'em',
    }`)
    span.am-margin-right-xs(v-if='icon', :class='`am-icon-${icon}`')
    slot(name='title')
    span.am-sub-nav-caret.am-fr.am-icon-caret-down(:class=`{
      'am-sub-nav-caret-open': collapse
    }`)
  am-dropdown(v-if='useDropdown', v-model='collapse')
    ul.am-sub-nav.am-nav
      slot
  collapse-transition(v-else, :show='collapse')
    ul.am-sub-nav.am-nav
      slot
</template>

<script>
import CollapseTransition from './CollapseTransition'
import AmDropdown from './Dropdown'

export default {
  name: 'AmSubNav',
  props: {
    defaultActive: Boolean,
    disabled: Boolean,
    icon: String,
  },
  components: {
    CollapseTransition,
    AmDropdown,
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
    selfMode () {
      return this.parentNav.mode
    },
    mode () {
      return 'vertical'
    },
    useDropdown () {
      return this.selfMode !== 'vertical'
    },
    padding () {
      return this.useDropdown ? 0 : (this.parentNav.padding + 1)
    },
  },
  watch: {
    active (newVal) {
      if (newVal && !this.useDropdown) {
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

.am-sub-nav-caret {
  transition: all .3s ease;
}

.am-sub-nav-caret-open {
  transform: rotate(180deg);
}

</style>
