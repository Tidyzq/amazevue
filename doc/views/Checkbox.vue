<template lang='jade'>
  .checkbox-page.am-container
    h1 Checkbox
    h2 Basic
    ul.am-avg-sm-5
      li
        am-checkbox(v-model='checkbox1') primary
      li
        am-checkbox(type='secondary', v-model='checkbox1') secondary
      li
        am-checkbox(type='success', v-model='checkbox1') success
      li
        am-checkbox(type='warning', v-model='checkbox1') warning
      li
        am-checkbox(type='danger', v-model='checkbox1') danger
    pre
      |//
      | am-checkbox(v-model='checkbox1') primary
      |//
      | am-checkbox(type='secondary', v-model='checkbox1') secondary
      |//
      | am-checkbox(type='success', v-model='checkbox1') success
      |//
      | am-checkbox(type='warning', v-model='checkbox1') warning
      |//
      | am-checkbox(type='danger', v-model='checkbox1') danger
    h2 Disabled
    am-checkbox(v-model='checkbox2') disabled
    ul.am-avg-sm-5
      li
        am-checkbox(v-model='checkbox1', :disabled='checkbox2') primary
      li
        am-checkbox(type='secondary', v-model='checkbox1', :disabled='checkbox2') secondary
      li
        am-checkbox(type='success', v-model='checkbox1', :disabled='checkbox2') success
      li
        am-checkbox(type='warning', v-model='checkbox1', :disabled='checkbox2') warning
      li
        am-checkbox(type='danger', v-model='checkbox1', :disabled='checkbox2') danger
    pre
      | \\
      | am-checkbox(v-model='checkbox1', :disabled='checkbox2') primary
      | \\
      | am-checkbox(type='secondary', v-model='checkbox1', :disabled='checkbox2') secondary
      | \\
      | am-checkbox(type='success', v-model='checkbox1', :disabled='checkbox2') success
      | \\
      | am-checkbox(type='warning', v-model='checkbox1', :disabled='checkbox2') warning
      | \\
      | am-checkbox(type='danger', v-model='checkbox1', :disabled='checkbox2') danger
    h2 Group
    am-checkbox-group(v-model='checkbox3')
      am-checkbox(label='a') a
      am-checkbox(label='b') b
      am-checkbox(label='c') c
      am-checkbox(label='d', disabled) d
    pre
      | am-checkbox-group(v-model='checkbox3')
      |   am-checkbox(label='a') a
      |   am-checkbox(label='b') b
      |   am-checkbox(label='c') c
      |   am-checkbox(label='d', disabled) d
</template>

<script>
import AmCheckbox from 'src/Checkbox'
import AmCheckboxGroup from 'src/CheckboxGroup'
import AmRow from 'src/Row'
import AmCol from 'src/Col'

export default {
  components: {
    AmCheckbox,
    AmCheckboxGroup,
    AmRow,
    AmCol
  },
  data () {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: ['a']
    }
  }
}
</script>

<style lang='less' scoped>

</style>
