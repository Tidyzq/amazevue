<template lang='jade'>
.tab-page.am-container
  h1 Tab
  h2 Basic
  am-tab-set(v-model='tab1')
    am-tab(header='First', name='1')
      p 1
      p 1
      p 1
    am-tab(header='Second', name='2')
      p 2
  pre
    | am-tab-set(v-model='tab1')
    |   am-tab(header='First', name='1')
    |     p 1
    |     p 1
    |     p 1
    |   am-tab(header='Second', name='2')
    |     p 2
  h2 Overflow
  am-tab-set(v-model='tab2', overflow)
    am-tab(header='First', name='1')
      p 1
      p 1
      p 1
    am-tab(header='Second', name='2')
      p 2
      am-select
        am-option(v-for='(_, index) in Array(10)', key='index', :label='index.toString()', :value='index')
  pre
    | am-tab-set(v-model='tab2', overflow)
    |   am-tab(header='First', name='1')
    |     p 1
    |     p 1
    |     p 1
    |   am-tab(header='Second', name='2')
    |     p 2
    |     am-select
    |       am-option(v-for='(_, index) in Array(10)', key='index', :label='index.toString()', :value='index')
  h2 Justify
  am-tab-set(v-model='tab3', justify)
    am-tab(header='First', name='1')
      p 1
      p 1
      p 1
    am-tab(header='Second', name='2')
      p 2
    am-tab(header='Third', name='3')
      p 3
  pre
    | am-tab-set(v-model='tab2', justify)
    |   am-tab(header='First', name='1')
    |     p 1
    |     p 1
    |     p 1
    |   am-tab(header='Second', name='2')
    |     p 2
    |   am-tab(header='Third', name='3')
    |     p 3
</template>

<script>
export default {
  data () {
    return {
      tab1: '1',
      tab2: '1',
      tab3: '1'
    }
  }
}
</script>
