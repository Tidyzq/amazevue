<template lang='jade'>
.am-tab-set.am-tabs
  ul.am-tabs-nav.am-nav.am-nav-tabs(:class=`{
      "am-nav-justify": navJustify,
    }`)
    li.am-tab-header(v-for='tab in tabs', key='tab.name', :class='{ "am-active": tab.show, "am-disabled": tab.disabled }', @click.prevent="select(tab)")
      a {{ tab.header }}
  slot(name='beforeEach')
  .am-tabs-bd
    slot
</template>

<script>

export default {
  props: {
    navJustify: {
      type: Boolean,
      defualt: false
    },
    effect: {
      type: String,
      default: 'fade'
    },
    value: [String, Number]
  },
  computed: {
    show: {
      get () {
        return this.ac
      },
      set (newVal) {
        this.$emit('select', newVal)
      }
    }
  },
  watch: {
    value (newVal) {
      this.show = this.value
    },
    show (newVal) {
      this.$emit('input', newVal)
      this.$emit('select', newVal)
    }
  },
  data () {
    return {
      tabs: [],
      show: this.value
    }
  },
  created () {
    this._tabset = true
  },
  methods: {
    select (tab) {
      if (!tab.disabled) {
        this.show = tab.name
      }
    }
  }
}
</script>

<style lang='less' scoped>
.am-tab-header > a {
  cursor: pointer;
}
</style>
