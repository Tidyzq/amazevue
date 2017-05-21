import StoreMixin from './store'

export default {
  mixins: [
    StoreMixin,
  ],
  created () {
    this.updateNavigation(this.$route.name)
  },
}
