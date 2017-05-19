<template lang='jade'>
#app
  main-header.main-header
  .main-content.am-container
    sidebar.sidebar(v-model='sidebarShow', :nav='navigation', @select='updateNavigation', :menus='menus')
    router-view.article.am-padding-sm
  main-footer.main-footer
</template>

<script>
import StoreMixin from 'doc/mixins/store'

export default {
  mixins: [
    StoreMixin,
  ],
  data () {
    return {
      topbarNav: '',
      sidebarShow: false,
    }
  },
  computed: {
    menus () {
      return [{
        name: 'Basic',
        children: [{
          name: 'Grid',
          index: 'Grid',
        }, {
          name: 'Button',
          index: 'Button',
        }],
      }, {
        name: 'Form',
        children: [{
          name: 'Form',
          index: 'Form',
        }, {
          name: 'Radio',
          index: 'Radio',
        }, {
          name: 'Checkbox',
          index: 'Checkbox',
        }, {
          name: 'Input',
          index: 'Input',
        }, {
          name: 'Input Multiple',
          index: 'InputMultiple',
        }, {
          name: 'Select',
          index: 'Select',
        }, {
          name: 'Date Picker',
          index: 'DatePicker',
        }, {
          name: 'File Select',
          index: 'FileSelect',
        }],
      }, {
        name: 'Data',
        children: [{
          name: 'Table',
          index: 'Table',
        }, {
          name: 'Tab',
          index: 'Tab',
        }, {
          name: 'Pagination',
          index: 'Pagination',
        }],
      }, {
        name: 'Other',
        children: [{
          name: 'Modal',
          index: 'Modal',
        }, {
          name: 'Collapse',
          index: 'Collapse',
        }, {
          name: 'Loading',
          index: 'Loading',
        }, {
          name: 'Alert',
          index: 'Alert',
        }, {
          name: 'Message',
          index: 'Message',
        }, {
          name: 'Topbar',
          index: 'Topbar',
        }, {
          name: 'Nav',
          index: 'Nav',
        }, {
          name: 'Dropdown',
          index: 'Dropdown',
        }],
      }]
    },
    // 所有menu的路径信息
    menusPaths () {
      return this.getMenuPath(this.menus)
    },
    // 当前路由的路径信息
    navigationPath () {
      return this.menusPaths[this.navigation] || []
    },
    // 当前路由的信息
    navigationInfo () {
      return this.navigationPath[this.navigationPath.length - 1]
    },
  },
  watch: {
    navigation (newVal) {
      if (newVal !== this.$route.name) {
        this.$router.push({
          name: newVal,
        })
      }
    },
  },
  methods: {
    getMenuPath (menus) {
      const path = [], target = {}
      this.innerGetMenuPath(menus, path, target)
      return target
    },
    // 递归函数, 用于计算导航路径
    innerGetMenuPath (menus, path, target) {
      for (const menu of menus) {
        const pathItem = Object.assign({}, menu)
        delete pathItem.children
        path.push(pathItem)
        if (menu.hasOwnProperty('index')) {
          target[menu.index] = path.slice()
        }
        if (menu.hasOwnProperty('children')) {
          this.innerGetMenuPath(menu.children, path, target)
        }
        path.pop()
      }
    },
  },
}
</script>

<style>

html, body {
  height: 100%;
  width: 100%;
}

#app, html, body {
  height: 100%;
}

body {
  overflow: auto;
}

.main-content {
  padding: 51px 0;
  min-height: 100%;
  display: flex;
  flex-direction: row;
}

.sidebar {
  flex: none;
}

.article {
  flex: auto;
}

.main-footer {
  margin-top: -51px;
}

</style>
