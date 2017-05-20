<template lang='jade'>
#app
  main-header.main-header
  .main-content.am-container
    sidebar.sidebar(v-model='sidebarShow', :nav='navigation', @select='updateNavigation', :menus='menus')
    .article.am-padding-sm
      router-view
  main-footer.main-footer
</template>

<script>
import StoreMixin from '@/mixins/store'
import RouterConfig from '@/router/config'

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
      return RouterConfig
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

pre, code {
  width: 100%;
  overflow-x: scroll;
}

.main-content {
  padding: 51px 0;
  min-height: 100%;
  display: flex;
  flex-direction: row;
}

.sidebar {
  flex: 0 0 auto;
}

.article {
  flex: 1 1 auto;
  overflow-x: hidden;
}

.main-footer {
  margin-top: -51px;
}

</style>
