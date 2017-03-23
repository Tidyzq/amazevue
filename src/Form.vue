<template lang='jade'>
  form.am-form(:class='formClasses', @submit.prevent='OnSubmit')
    slot
</template>

<script>
import AmRow from './Row'
import AmCol from './Col'

export default {
  components: {
    AmRow,
    AmCol
  },
  props: {
    form: Object,
    inline: Boolean,
    labelPosition: {
      type: String,
      default: 'right'
    },
    labelSpan: {
      type: Number,
      default: 2
    }
  },
  created () {
    this._form = true
  },
  computed: {
    formClasses () {
      return `am-form-label-${this.labelPosition}`
    },
    contentSpan () {
      return this.labelPosition === 'top' ? 12 : 12 - this.labelSpan
    }
  },
  methods: {
    OnSubmit () {
      console.log('submit')
    }
  }
}
</script>

<style lang='less' scoped>
@import './less/variables.less';

</style>
