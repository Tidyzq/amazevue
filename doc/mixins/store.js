import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'navigation',
  ]),
  methods: mapActions([
    'updateNavigation',
  ]),
}
