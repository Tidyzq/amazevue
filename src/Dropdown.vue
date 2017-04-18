<script>
export default {
  name: 'AmDropdown',
  props: {
    value: Boolean,
    direction: {
      type: String,
      default: 'down',
    },
    contentTag: {
      type: String,
      default: 'div',
    },
  },
  render (h) {
    return h('div', {
      staticClass: 'am-dropdown',
      class: {
        'am-active': this.visiable,
        'am-dropdown-up': this.direction === 'up',
      },
    }, [
      h('transition', {
        attrs: {
          'enter-active-class': 'am-animation-slide-top-fixed',
          'leave-active-class': 'am-dropdown-animation',
        },
        on: {
          'before-enter': this.BeforeOpen,
          'after-enter': this.AfterOpen,
          'before-leave': this.BeforeClose,
          'after-leave': this.AfterClose,
        },
      }, [
        h(this.contentTag, {
          directives: [ {
            name: 'show',
            rawName: 'v-show',
            value: this.show,
          } ],
          ref: 'content',
          staticClass: 'am-dropdown-content',
        }, this.$slots.default),
      ]),
    ])
  },
  data () {
    return {
      active: this.show,
      visiable: this.show,
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      },
    },
  },
  created () {
    this._documentListener = e => {
      const content = this.$refs.content
      if (this.active && content && !content.contains(e.target) && content !== e.target) {
        this.show = false
      }
    }
    document.addEventListener('click', this._documentListener)
  },
  beforeDestroy () {
    document.removeEventListener('click', this._documentListener)
  },
  methods: {
    BeforeOpen () {
      this.visiable = true
    },
    AfterOpen () {
      this.active = true
    },
    BeforeClose () {
      this.active = false
    },
    AfterClose () {
      this.visiable = false
    },
  },
}
</script>

<style lang='less' scoped>

.am-dropdown {
  display: block;
}

.am-dropdown-content {
  padding: 5px 0;
}

</style>
