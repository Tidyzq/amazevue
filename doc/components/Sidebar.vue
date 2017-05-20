<script>
export default {
  name: 'sidebar',
  props: {
    value: Boolean,
    nav: String,
    menus: Array,
  },
  render (h) {
    return h('aside', {
      staticClass: 'sidebar',
      class: {
        'sidebar-active': this.show,
      },
    }, [
      h('am-nav', {
        staticClass: 'sidebar-nav',
        props: {
          value: this.nav,
        },
        on: {
          input: event => {
            this.$emit('select', event)
            this.show = false
          },
        },
      },
      this.renderMenu.call(this._renderProxy, h, this.menus, 0)
      ),
    ])
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
  methods: {
    renderMenu (h, menus, depth) {
      const result = [], color = Math.floor(255 - 255 * depth / 20 + 0.5)
      for (const menu of menus) {
        if (menu.show === false) {
          continue
        }
        if (menu.children) {
          const children = this.renderMenu.call(this._renderProxy, h, menu.children, depth + 1)
          children.unshift(h('template', {
            slot: 'title',
          }, [ menu.name ]))
          result.push(h('am-sub-nav', {
            props: {
              icon: menu.icon,
              open: true,
            },
            style: {
              background: `rgb(${color},${color},${color})`,
            },
          }, children))
        } else {
          result.push(h('am-nav-item', {
            props: {
              icon: menu.icon,
              index: menu.index,
            },
            style: {
              background: `rgb(${color},${color},${color})`,
            },
          }, [ menu.name ]))
        }
      }
      return result
    },
  },
}
</script>

<style>

/*.sidebar-nav {
  background: white;
  min-width: 260px;
}*/

.sidebar {
  /*background: #eee;*/
  overflow-x: hidden;
  overflow-y: auto;
  /*max-width: 0;*/
  /*z-index: 900;*/
  /*border-right: 1px solid #ccc;*/
  /*transition: max-width .3s;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  /*bottom: 0;*/
}

/*.sidebar.sidebar-active {
  max-width: 100%;
}*/

@media only screen and (min-width: 641px) {
  .sidebar {
    width: 260px;
  }
}

</style>
