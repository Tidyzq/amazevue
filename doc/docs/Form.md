# Form

## Basic

:::demo
```html
<am-form>
  <am-form-item label="Label1">
    <am-input placeholder="Input1" v-model="form1.input"></am-input>
  </am-form-item>
  <am-form-item label="Label2">
    <am-select placeholder="Select2" v-model="form1.select">
      <am-option value="1" label="1"></am-option>
      <am-option value="2" label="2"></am-option>
    </am-select>
  </am-form-item>
  <am-form-item label="Label3">
    <am-input-multiple placeholder="InputMultiple1" v-model="form1.inputMultiple"></am-input-multiple>
  </am-form-item>
  <am-form-item label="Label4">
    <am-radio-group v-model="form1.radio">
      <am-radio :label="true">true</am-radio>
      <am-radio :label="false">false</am-radio>
    </am-radio-group>
  </am-form-item>
  <am-form-item>
    <am-button type="primary">Submit</am-button>
  </am-form-item>
</am-form>
```
:::

## Label Position

<am-radio-group v-model="form2.labelPosition" style="margin-bottom: 1em">
  <am-radio label="left">left</am-radio>
  <am-radio label="right">right</am-radio>
  <am-radio label="top">top</am-radio>
</am-radio-group>

:::demo
```html
<am-form :label-position="form2.labelPosition">
  <am-form-item label="Label1">
    <am-input placeholder="Input1" v-model="form2.input"></am-input>
  </am-form-item>
  <am-form-item label="Label2">
    <am-select placeholder="Select2" v-model="form2.select">
      <am-option value="1" label="1"></am-option>
      <am-option value="2" label="2"></am-option>
    </am-select>
  </am-form-item>
  <am-form-item label="Label3">
    <am-radio-group v-model="form2.radio">
      <am-radio :label="true">true</am-radio>
      <am-radio :label="false">false</am-radio>
    </am-radio-group>
  </am-form-item>
  <am-form-item>
    <am-button type="primary">Submit</am-button>
  </am-form-item>
</am-form>
```
:::

## Label Span & Content Span

:::demo
```html
<am-form label-position="left" :label-span="{ sm: 12, md: 1 }" :content-span="{ sm: 12, md: 11 }">
  <am-form-item label="Label1">
    <am-input placeholder="Input1" v-model="form3.input"></am-input>
  </am-form-item>
</am-form>
```
:::

## Item Span

:::demo
```html
<am-form label-position="top" gutter="sm">
  <am-form-item label="Label1" :span="3">
    <am-input placeholder="Input1" v-model="form2.input"></am-input>
  </am-form-item>
  <am-form-item label="Label2" :span="3">
    <am-select placeholder="Select2" v-model="form2.select">
      <am-option value="1" label="1"></am-option>
      <am-option value="2" label="2"></am-option>
    </am-select>
  </am-form-item>
  <am-form-item label="Label3" :span="3">
    <am-radio-group v-model="form2.radio">
      <am-radio :label="true">true</am-radio>
      <am-radio :label="false">false</am-radio>
    </am-radio-group>
  </am-form-item>
  <am-form-item :span="3">
    <am-button type="primary">Submit</am-button>
  </am-form-item>
</am-form>
```
:::

<script>
import PageMixin from '@/mixins/page'

export default {
  mixins: [
    PageMixin,
  ],
  data () {
    return {
      form1: {
        input: '',
        select: '',
        inputMultiple: [],
        radio: true,
      },
      form2: {
        labelPosition: 'left',
        input: '',
        select: '',
        radio: true,
      },
      form3: {
        input: '',
      },
    }
  },
}
</script>
