<template lang='jade'>
  .select-page.am-container
    h1 Select
    h2 Basic
    am-select(v-model='select1')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    pre
      | am-select(v-model='select1')
      |   am-option(value='A', label='A')
      |   am-option(value='B', label='B')
      |   am-option(value='C', label='C')
      |   am-option(value='D', label='D', disabled)
    h2 Placeholder
    am-select(v-model='select2', placeholder='select')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    pre
      | am-select(v-model='select2', placeholder='select')
      |   am-option(value='A', label='A')
      |   am-option(value='B', label='B')
      |   am-option(value='C', label='C')
      |   am-option(value='D', label='D', disabled)
    h2 Multiple
    am-select(v-model='select3', multiple)
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    pre
      | am-select(v-model='select3', multiple)
      |   am-option(value='A', label='A')
      |   am-option(value='B', label='B')
      |   am-option(value='C', label='C')
      |   am-option(value='D', label='D', disabled)
    h2 Group
    am-select(v-model='select4')
      am-option-group(label='section1')
        am-option(value='A', label='A')
        am-option(value='B', label='B')
        am-option(value='C', label='C')
      am-option-group(label='section2')
        am-option(value='D', label='D')
        am-option(value='E', label='E')
        am-option(value='F', label='F')
      am-option-group(label='section3')
        am-option(value='G', label='G')
        am-option(value='H', label='H')
        am-option(value='I', label='I', disabled)
    pre
      | am-select(v-model='select4')
      |   am-option-group(label='section1')
      |     am-option(value='A', label='A')
      |     am-option(value='B', label='B')
      |     am-option(value='C', label='C')
      |   am-option-group(label='section2')
      |     am-option(value='D', label='D')
      |     am-option(value='E', label='E')
      |     am-option(value='F', label='F')
      |   am-option-group(label='section3')
      |     am-option(value='G', label='G')
      |     am-option(value='H', label='H')
      |     am-option(value='I', label='I', disabled)
    h2 Color
    am-select(type='primary', v-model='select5')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='secondary', v-model='select5')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='success', v-model='select5')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='warning', v-model='select5')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='danger', v-model='select5')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='primary', v-model='select6', multiple)
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='secondary', v-model='select6', multiple)
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='success', v-model='select6', multiple)
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='warning', v-model='select6', multiple)
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    am-select(type='danger', v-model='select6', multiple)
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D', disabled)
    pre
      | am-select(type='primary', v-model='select5')
      | am-select(type='secondary', v-model='select5')
      | am-select(type='success', v-model='select5')
      | am-select(type='warning', v-model='select5')
      | am-select(type='danger', v-model='select5')
      | am-select(type='primary', v-model='select6', multiple)
      | am-select(type='secondary', v-model='select6', multiple)
      | am-select(type='success', v-model='select6', multiple)
      | am-select(type='warning', v-model='select6', multiple)
      | am-select(type='danger', v-model='select6', multiple)
    h2 Max Hight
    am-select(v-model='select7', max-height='200px')
      am-option(value='A', label='A')
      am-option(value='B', label='B')
      am-option(value='C', label='C')
      am-option(value='D', label='D')
      am-option(value='E', label='E')
      am-option(value='F', label='F')
      am-option(value='G', label='G')
      am-option(value='H', label='H')
      am-option(value='I', label='I')
      am-option(value='J', label='J')
      am-option(value='K', label='K')
      am-option(value='L', label='L')
      am-option(value='M', label='M')
      am-option(value='N', label='N')
      am-option(value='O', label='O')
      am-option(value='P', label='P')
      am-option(value='Q', label='Q')
      am-option(value='R', label='R')
      am-option(value='S', label='S')
      am-option(value='T', label='T')
      am-option(value='U', label='U')
      am-option(value='V', label='V')
      am-option(value='W', label='W')
      am-option(value='X', label='X')
      am-option(value='Y', label='Y')
      am-option(value='Z', label='Z')
    pre
      | am-select(v-model='select7', max-height='200px')
</template>

<script>
export default {
  data () {
    return {
      select1: 'A',
      select2: '',
      select3: ['A'],
      select4: 'A',
      select5: 'A',
      select6: ['A'],
      select7: 'A'
    }
  }
}
</script>

<style lang='less' scoped>
.am-selected + .am-selected {
  margin-top: 1rem;
}
</style>
