<template lang='jade'>
  form.am-form(:class='formClasses', @submit.prevent='OnSubmit')
    am-row(:gutter='gutter')
      slot
</template>

<script>
import AmRow from './Row'

export default {
  name: 'AmForm',
  props: {
    form: Object,
    inline: Boolean,
    labelPosition: {
      type: String,
      default: 'right',
    },
    labelSpan: {
      type: [ Number, Object ],
      default: 2,
    },
    contentSpan: {
      type: [ Number, Object ],
      default: 10,
    },
    gutter: String,
  },
  components: {
    AmRow,
  },
  data () {
    return {
      props: {},
    }
  },
  created () {
    this._form = true
  },
  computed: {
    formClasses () {
      return `am-form-label-${this.labelPosition}`
    },
  },
  methods: {
    OnSubmit () {
    },
  },
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

// .am-form {
//   overflow-x: hidden;
//   overflow-y: visible;
// }

</style>
