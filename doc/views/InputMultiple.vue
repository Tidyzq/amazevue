<template lang='jade'>
  .input-multiple-page.am-container
    h1 Input Multiple
    h2 Basic
    am-input-multiple(v-model='input1')
    pre
      | am-input-multiple(v-model='input1')
    h2 Color
    am-input-multiple(type='primary', v-model='input2')
    am-input-multiple(type='secondary', v-model='input2')
    am-input-multiple(type='success', v-model='input2')
    am-input-multiple(type='warning', v-model='input2')
    am-input-multiple(type='danger', v-model='input2')
    pre
      | am-input-multiple(type='primary', v-model='input2')
      | am-input-multiple(type='secondary', v-model='input2')
      | am-input-multiple(type='success', v-model='input2')
      | am-input-multiple(type='warning', v-model='input2')
      | am-input-multiple(type='danger', v-model='input2')
    h2 Disabled
    am-input-multiple(v-model='input3', disabled)
    pre
      | am-input-multiple(v-model='input3', disabled)
</template>

<script>
import AmInputMultiple from 'src/InputMultiple'

export default {
  components: {
    AmInputMultiple
  },
  data () {
    return {
      input1: ['A'],
      input2: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger'],
      input3: ['disabled']
    }
  }
}
</script>

<style lang='less' scoped>

.am-input-multiple + .am-input-multiple {
  margin-top: 1em;
}

</style>
