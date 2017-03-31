<template lang='jade'>
  .form-page.am-container
    h1 Form
    h2 Basic
    am-form
      am-form-item(label='Label1')
        am-input(placeholder='Input1', v-model='form1.input')
      am-form-item(label='Label2')
        am-select(placeholder='Select2', v-model='form1.select')
          am-option(value='1', label='1')
          am-option(value='2', label='2')
      am-form-item(label='Label3')
        am-input-multiple(placeholder='InputMultiple1', v-model='form1.inputMultiple')
      am-form-item(label='Label4')
        am-radio-group(v-model='form1.radio')
          am-radio(:label='true') true
          am-radio(:label='false') false
      am-form-item
        am-button(type='primary') Submit
    pre
      | am-form
      |   am-form-item(label='Label1')
      |     am-input(placeholder='Input1', v-model='form1.input')
      |   am-form-item(label='Label2')
      |     am-select(placeholder='Select2', v-model='form1.select')
      |       am-option(value='1', label='1')
      |       am-option(value='2', label='2')
      |   am-form-item(label='Label3')
      |     am-radio-group(v-model='form1.radio')
      |       am-radio(:label='true') true
      |       am-radio(:label='false') false
      |   am-form-item
      |     am-button(type='primary') Submit
    h2 Label Position
    am-radio-group(v-model='form2.labelPosition', style='margin-bottom: 1em;')
      am-radio(label='left') left
      am-radio(label='right') right
      am-radio(label='top') top
    am-form(:label-position='form2.labelPosition')
      am-form-item(label='Label1')
        am-input(placeholder='Input1', v-model='form2.input')
      am-form-item(label='Label2')
        am-select(placeholder='Select2', v-model='form2.select')
          am-option(value='1', label='1')
          am-option(value='2', label='2')
      am-form-item(label='Label3')
        am-radio-group(v-model='form2.radio')
          am-radio(:label='true') true
          am-radio(:label='false') false
      am-form-item
        am-button(type='primary') Submit
    pre
      | am-form(:label-position='form2.labelPosition')
      |   am-form-item(label='Label1')
      |     am-input(placeholder='Input1', v-model='form2.input')
      |   am-form-item(label='Label2')
      |     am-select(placeholder='Select2', v-model='form2.select')
      |       am-option(value='1', label='1')
      |       am-option(value='2', label='2')
      |   am-form-item(label='Label3')
      |     am-radio-group(v-model='form2.radio')
      |       am-radio(:label='true') true
      |       am-radio(:label='false') false
      |   am-form-item
      |     am-button(type='primary') Submit
    h2 Label Span
    am-form(:label-span='1')
      am-form-item(label='Label1')
        am-input(placeholder='Input1', v-model='form3.input')
    pre
      | am-form(:label-span='1')
      |   am-form-item(label='Label1')
      |     am-input(placeholder='Input1', v-model='form3.input')
    h2 Item Span
    am-form(label-position='top', gutter='sm')
      am-form-item(label='Label1', :span='3')
        am-input(placeholder='Input1', v-model='form2.input')
      am-form-item(label='Label2', :span='3')
        am-select(placeholder='Select2', v-model='form2.select')
          am-option(value='1', label='1')
          am-option(value='2', label='2')
      am-form-item(label='Label3', :span='3')
        am-radio-group(v-model='form2.radio')
          am-radio(:label='true') true
          am-radio(:label='false') false
      am-form-item(:span='3')
        am-button(type='primary') Submit
    pre
      | am-form(label-position='top', gutter='sm')
      |   am-form-item(label='Label1', :span='3')
      |     am-input(placeholder='Input1', v-model='form2.input')
      |   am-form-item(label='Label2', :span='3')
      |     am-select(placeholder='Select2', v-model='form2.select')
      |       am-option(value='1', label='1')
      |       am-option(value='2', label='2')
      |   am-form-item(label='Label3', :span='3')
      |     am-radio-group(v-model='form2.radio')
      |       am-radio(:label='true') true
      |       am-radio(:label='false') false
      |   am-form-item(:span='3')
      |     am-button(type='primary') Submit
</template>

<script>
import AmForm from 'src/Form'
import AmFormItem from 'src/FormItem'
import AmInput from 'src/Input'
import AmInputMultiple from 'src/InputMultiple'
import AmButton from 'src/Button'
import AmSelect from 'src/Select'
import AmOption from 'src/Option'
import AmRadioGroup from 'src/RadioGroup'
import AmRadio from 'src/Radio'

export default {
  components: {
    AmForm,
    AmFormItem,
    AmInput,
    AmInputMultiple,
    AmButton,
    AmSelect,
    AmOption,
    AmRadioGroup,
    AmRadio
  },
  data () {
    return {
      form1: {
        input: '',
        select: '',
        inputMultiple: [],
        radio: true
      },
      form2: {
        labelPosition: 'left',
        input: '',
        select: '',
        radio: true
      },
      form3: {
        input: ''
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
