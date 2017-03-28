<template lang='jade'>
  form.am-form(:class='formClasses', @submit.prevent='OnSubmit')
    slot
</template>

<script>
export default {
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
  data () {
    return {
      props: {}
    }
  },
  created () {
    this._form = true
  },
  computed: {
    formClasses () {
      return `am-form-label-${this.labelPosition}`
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
