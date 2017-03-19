<template lang='jade'>
  .radio-page.am-container
    h1 Radio
    h2 Basic
    ul.am-avg-sm-5
      li
        am-radio(v-model='radio1', :label='true') primary
        am-radio(v-model='radio1', :label='false') primary
      li
        am-radio(type='secondary', v-model='radio1', :label='true') secondary
        am-radio(type='secondary', v-model='radio1', :label='false') secondary
      li
        am-radio(type='success', v-model='radio1', :label='true') success
        am-radio(type='success', v-model='radio1', :label='false') success
      li
        am-radio(type='warning', v-model='radio1', :label='true') warning
        am-radio(type='warning', v-model='radio1', :label='false') warning
      li
        am-radio(type='danger', v-model='radio1', :label='true') danger
        am-radio(type='danger', v-model='radio1', :label='false') danger
    pre
      |//
      | am-radio(v-model='radio1', :label='true') primary
      | am-radio(v-model='radio1', :label='false') primary
      |//
      | am-radio(type='secondary', v-model='radio1', :label='true') secondary
      | am-radio(type='secondary', v-model='radio1', :label='false') secondary
      |//
      | am-radio(type='success', v-model='radio1', :label='true') success
      | am-radio(type='success', v-model='radio1', :label='false') success
      |//
      | am-radio(type='warning', v-model='radio1', :label='true') warning
      | am-radio(type='warning', v-model='radio1', :label='false') warning
      |//
      | am-radio(type='danger', v-model='radio1', :label='true') danger
      | am-radio(type='danger', v-model='radio1', :label='false') danger
    h2 Disabled
    label
      | Disabled
      am-radio(v-model='radio2', :label='true') true
      am-radio(v-model='radio2', :label='false') false
    ul.am-avg-sm-5
      li
        am-radio(v-model='radio1', :label='true', :disabled='radio2') primary
        am-radio(v-model='radio1', :label='false', :disabled='radio2') primary
      li
        am-radio(type='secondary', v-model='radio1', :label='true', :disabled='radio2') secondary
        am-radio(type='secondary', v-model='radio1', :label='false', :disabled='radio2') secondary
      li
        am-radio(type='success', v-model='radio1', :label='true', :disabled='radio2') success
        am-radio(type='success', v-model='radio1', :label='false', :disabled='radio2') success
      li
        am-radio(type='warning', v-model='radio1', :label='true', :disabled='radio2') warning
        am-radio(type='warning', v-model='radio1', :label='false', :disabled='radio2') warning
      li
        am-radio(type='danger', v-model='radio1', :label='true', :disabled='radio2') danger
        am-radio(type='danger', v-model='radio1', :label='false', :disabled='radio2') danger
    pre
      | am-radio(v-model='radio2', :label='true') true
      | am-radio(v-model='radio2', :label='false') false
      | \\
      | am-radio(v-model='radio1', :label='true', :disabled='radio2') primary
      | am-radio(v-model='radio1', :label='false', :disabled='radio2') primary
      | \\
      | am-radio(type='secondary', v-model='radio1', :label='true', :disabled='radio2') secondary
      | am-radio(type='secondary', v-model='radio1', :label='false', :disabled='radio2') secondary
      | \\
      | am-radio(type='success', v-model='radio1', :label='true', :disabled='radio2') success
      | am-radio(type='success', v-model='radio1', :label='false', :disabled='radio2') success
      | \\
      | am-radio(type='warning', v-model='radio1', :label='true', :disabled='radio2') warning
      | am-radio(type='warning', v-model='radio1', :label='false', :disabled='radio2') warning
      | \\
      | am-radio(type='danger', v-model='radio1', :label='true', :disabled='radio2') danger
      | am-radio(type='danger', v-model='radio1', :label='false', :disabled='radio2') danger
    h2 Group
    am-radio-group(v-model='radio3')
      am-radio(:label='1') 1
      am-radio(:label='2') 2
      am-radio(:label='3') 3
      am-radio(:label='4', :disabled='true') 4
    pre
      | am-radio-group(v-model='radio3')
      |   am-radio(:label='1') 1
      |   am-radio(:label='2') 2
      |   am-radio(:label='3') 3
      |   am-radio(:label='4', :disabled='true') 4

</template>

<script>
import AmRadio from '@/components/Radio'
import AmRadioGroup from '@/components/RadioGroup'
import AmRow from '@/components/Row'
import AmCol from '@/components/Col'

export default {
  components: {
    AmRadio,
    AmRadioGroup,
    AmRow,
    AmCol
  },
  data () {
    return {
      radio1: true,
      radio2: true,
      radio3: 1
    }
  }
}
</script>

<style lang='less' scoped>

</style>
