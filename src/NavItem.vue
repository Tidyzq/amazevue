<template lang='jade'>
li.am-nav-item(:class=`{
    'am-active': active,
    'am-disabled': disabled,
  }`)
  a(@click='handleClick')
    slot
</template>

<script>
export default {
  name: 'AmNavItem',
  props: {
    index: {
      type: [ Number, String ],
      required: true,
    },
    defaultActive: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      rootNav: null,
      parentNav: null,
    }
  },
  created () {
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
      throw new Error('NavItem needs Nav to work')
    }
    if (this.defaultActive) {
      this.rootNav.active = this.index
    }
    this.parentNav.items.push(this)
  },
  computed: {
    active () {
      return this.rootNav.active === this.index
    },
  },
  methods: {
    handleClick () {
      if (!this.active && !this.disabled) {
        this.rootNav.active = this.index
      }
    },
  },
}
</script>

<style lang='less' scoped>

.am-nav-item {
  margin: 0;
  cursor: pointer;
}

</style>
