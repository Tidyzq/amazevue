import StoreMixin from './store'
import PrismJs from 'prismjs'

export default {
  mixins: [
    StoreMixin,
  ],
  created () {
    console.log('PageMixin created')
    this.updateNavigation(this.$route.name)
  },
  mounted () {
    console.log('PageMixin mounted')
    PrismJs.highlightAll()
  },
}
