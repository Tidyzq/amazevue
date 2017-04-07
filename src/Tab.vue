<template lang='jade'>
.am-tab-panel(v-show='show', :class=`{
    "am-active": show,
  }`)
  slot
</template>

<script>
export default {
  props: {
    header: String,
    name: {
      required: true,
      type: [String, Number]
    },
    disabled: Boolean
  },
  data () {
    return {
      _tabset: null
    }
  },
  computed: {
    show () {
      return this._tabset && this._tabset.show === this.name
    },
    transition () {
      return this._tabset ? this._tabset.effect : null
    }
  },
  created () {
    let tabset = this
    while (tabset && tabset._tabset !== true && tabset.$parent) {
      tabset = tabset.$parent
    }
    if (!tabset._tabset) {
      throw new Error('Warning: "tab" depend on "tabset" to work properly.')
    } else {
      tabset.tabs.push(this)
      this._tabset = tabset
    }
  },
  beforeDestroy () {
    let tabset = this._tabset
    let index = tabset.tabs.indexOf(this)
    this._tabset.tabs.splice(index, 1)
  }
}
</script>
