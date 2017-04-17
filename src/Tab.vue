<template lang='jade'>
.am-tab-panel(:class=`{
    "am-active": show
  }`)
  slot
</template>

<script>
export default {
  name: 'AmTab',
  props: {
    header: String,
    name: {
      required: true,
      type: [ String, Number ],
    },
    disabled: Boolean,
  },
  data () {
    return {
      _tabset: null,
    }
  },
  computed: {
    show () {
      return this._tabset && this._tabset.show === this.name
    },
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
    const tabset = this._tabset
    const index = tabset.tabs.indexOf(this)
    this._tabset.tabs.splice(index, 1)
  },
}
</script>
