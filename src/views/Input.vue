<template lang='jade'>
  .input-page.am-container
    h1 Input
    h2 Basic
    am-input(v-model='input1', placeholder='basic')
    pre
      | am-input(v-model='input1', placeholder='basic')
    h2 Native Type
    am-input(v-model='input2', native-type='textarea', placeholder='not resizeable', :rows='5', :resize='false')
    am-input(v-model='input2', native-type='textarea', placeholder='resizeable')
    am-input(v-model='input2', native-type='password', placeholder='password')
    am-input(v-model='input6', native-type='number', placeholder='number')
    pre
      | am-input(v-model='input2', native-type='textarea', placeholder='not resizeable', :rows='5', :resize='false')
      | am-input(v-model='input2', native-type='textarea', placeholder='resizeable')
      | am-input(v-model='input2', native-type='password', placeholder='password')
      | am-input(v-model='input6', native-type='number', placeholder='number')
    h2 Color
    am-input(type='primary', v-model='input3', placeholder='primary')
    am-input(type='secondary', v-model='input3', placeholder='secondary')
    am-input(type='success', v-model='input3', placeholder='success')
    am-input(type='warning', v-model='input3', placeholder='warning')
    am-input(type='danger', v-model='input3', placeholder='danger')
    pre
      | am-input(type='primary', v-model='input3', placeholder='primary')
      | am-input(type='secondary', v-model='input3', placeholder='secondary')
      | am-input(type='success', v-model='input3', placeholder='success')
      | am-input(type='warning', v-model='input3', placeholder='warning')
      | am-input(type='danger', v-model='input3', placeholder='danger')
    h2 Icon & Button
    am-input(type='primary', v-model='input4', placeholder='User')
      i.am-icon-user(slot='prepend')
    am-input(type='warning', v-model='input4', placeholder='Currency')
      span(slot='append') .00
    am-input(type='secondary', v-model='input4', placeholder='Search', append-btn)
      am-button(slot='append', icon='search')
    pre
      | am-input(type='primary', v-model='input4', placeholder='User')
      |   i.am-icon-user(slot='prepend')
      | am-input(type='warning', v-model='input4', placeholder='Currency')
      |   span(slot='append') .00
      | am-input(type='secondary', v-model='input4', placeholder='Search', append-btn)
      |   am-button(slot='append', icon='search')
    h2 Disabled
    am-input(type='primary', v-model='input4', placeholder='User', disabled)
      i.am-icon-user(slot='prepend')
    am-input(type='warning', v-model='input4', placeholder='Currency', disabled)
      span(slot='append') .00
    am-input(type='secondary', v-model='input4', placeholder='Search', append-btn, disabled)
      am-button(slot='append', icon='search', disabled)
    pre
      | am-input(type='primary', v-model='input4', placeholder='User', disabled)
      |   i.am-icon-user(slot='prepend')
      | am-input(type='warning', v-model='input4', placeholder='Currency', disabled)
      |   span(slot='append') .00
      | am-input(type='secondary', v-model='input4', placeholder='Search', append-btn, disabled)
      |   am-button(slot='append', icon='search', disabled)
    h2 Size
    am-input(size='lg', v-model='input5', placeholder='lg')
      span(slot='prepend') @
    am-input(v-model='input5', placeholder='md')
      span(slot='prepend') @
    am-input(size='sm', v-model='input5', placeholder='sm')
      span(slot='prepend') @
    am-input(size='lg', v-model='input5', placeholder='lg')
    am-input(v-model='input5', placeholder='md')
    am-input(size='sm', v-model='input5', placeholder='sm')
    pre
      | am-input(size='lg', v-model='input5', placeholder='lg')
      |   span(slot='prepend') @
      | am-input(v-model='input5', placeholder='md')
      |   span(slot='prepend') @
      | am-input(size='sm', v-model='input5', placeholder='sm')
      |   span(slot='prepend') @
      | am-input(size='lg', v-model='input5', placeholder='lg')
      | am-input(v-model='input5', placeholder='md')
      | am-input(size='sm', v-model='input5', placeholder='sm')
</template>

<script>
import AmInput from '@/components/Input'
import AmButton from '@/components/Button'
import AmRow from '@/components/Row'
import AmCol from '@/components/Col'

export default {
  components: {
    AmInput,
    AmButton,
    AmRow,
    AmCol
  },
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: 0
    }
  }
}
</script>

<style lang='less' scoped>
.am-input+.am-input {
  margin-top: 1rem;
}
</style>
