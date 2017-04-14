<template lang='jade'>
.collapse-page.am-container
  h1 Collapse
  h2 Basic
  am-collapse-set(v-model='collapse1')
    am-collapse(name='1', title='First')
      p this is the first collapse
    am-collapse(name='2', title='Second')
      p this is the second collapse
    am-collapse(name='3', title='Third')
      p this is the third collapse
  pre
    | am-collapse-set(v-model='collapse1')
    |   am-collapse(name='1', title='First')
    |     p this is the first collapse
    |   am-collapse(name='2', title='Second')
    |     p this is the second collapse
    |   am-collapse(name='3', title='Third')
    |     p this is the third collapse
  h2 Accordion
  am-collapse-set(v-model='collapse2', accordion)
    am-collapse(name='1', title='First')
      p this is the first collapse
    am-collapse(name='2', title='Second')
      p this is the second collapse
    am-collapse(name='3', title='Third')
      p this is the third collapse
  pre
    | am-collapse-set(v-model='collapse2', accordion)
    |   am-collapse(name='1', title='First')
    |     p this is the first collapse
    |   am-collapse(name='2', title='Second')
    |     p this is the second collapse
    |   am-collapse(name='3', title='Third')
    |     p this is the third collapse
  h2 Color
  am-collapse-set(v-model='collapse3')
    am-collapse(type='primary' name='1', title='Primary')
      p this is the primary collapse
    am-collapse(type='secondary' name='2', title='Secondary')
      p this is the secondary collapse
    am-collapse(type='success' name='3', title='Success')
      p this is the success collapse
    am-collapse(type='warning' name='4', title='Warning')
      p this is the warning collapse
    am-collapse(type='danger' name='5', title='Danger')
      p this is the danger collapse
  pre
    | am-collapse-set(v-model='collapse3')
    |   am-collapse(type='primary' name='1', title='Primary')
    |     p this is the primary collapse
    |   am-collapse(type='secondary' name='2', title='Secondary')
    |     p this is the secondary collapse
    |   am-collapse(type='success' name='3', title='Success')
    |     p this is the success collapse
    |   am-collapse(type='warning' name='4', title='Warning')
    |     p this is the warning collapse
    |   am-collapse(type='danger' name='5', title='Danger')
    |     p this is the danger collapse
  h2 Title
  am-collapse-set(v-model='collapse4')
    am-collapse(name='1')
      i.am-icon-file(slot='title')  First
      p this is the first collapse
    am-collapse(name='2')
      i.am-icon-file(slot='title')  Second
      p this is the second collapse
    am-collapse(name='3')
      i.am-icon-file(slot='title')  Third
      p this is the third collapse
  pre
    | am-collapse-set(v-model='collapse4')
    |   am-collapse(name='1')
    |     i.am-icon-file(slot='title')  First
    |     p this is the first collapse
    |   am-collapse(name='2')
    |     i.am-icon-file(slot='title')  Second
    |     p this is the second collapse
    |   am-collapse(name='3')
    |     i.am-icon-file(slot='title')  Third
    |     p this is the third collapse
</template>

<script>
export default {
  data () {
    return {
      collapse1: [],
      collapse2: '',
      collapse3: [],
      collapse4: []
    }
  }
}
</script>
