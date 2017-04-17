<template lang='jade'>
  .file-select-page.am-container
    h1 File Select
    h2 Basic
    am-file-select(v-model='files1', icon='cloud-upload') Single File
    p
      span.am-badge(v-for='file in files1') {{file.name}}
    pre(v-pre)
      | am-file-select(v-model='files1', icon='cloud-upload') Single File
      | p
      |   span.am-badge(v-for='file in files1') {{file.name}}
    h2 Multiple
    am-file-select(v-model='files2', multiple, icon='cloud-upload') Multiple File
    p
      span.am-badge(v-for='file in files2') {{file.name}}
    pre(v-pre)
      | am-file-select(v-model='files2', multiple, icon='cloud-upload') Multiple File
      | p
      |   span.am-badge(v-for='file in files2') {{file.name}}
    h2 Color
    am-file-select(type='primary', v-model='files3', icon='cloud-upload') Primary
    am-file-select(type='secondary', v-model='files3', icon='cloud-upload') Secondary
    am-file-select(type='success', v-model='files3', icon='cloud-upload') Success
    am-file-select(type='warning', v-model='files3', icon='cloud-upload') Warning
    am-file-select(type='danger', v-model='files3', icon='cloud-upload') Danger
    p
      span.am-badge(v-for='file in files3') {{file.name}}
    pre
      | am-file-select(type='primary', v-model='files3', icon='cloud-upload') Primary
      | am-file-select(type='secondary', v-model='files3', icon='cloud-upload') Secondary
      | am-file-select(type='success', v-model='files3', icon='cloud-upload') Success
      | am-file-select(type='warning', v-model='files3', icon='cloud-upload') Warning
      | am-file-select(type='danger', v-model='files3', icon='cloud-upload') Danger
    h2 Disabled
    am-file-select(v-model='files3', icon='cloud-upload', disabled) Disabled
    pre
      | am-file-select(v-model='files3', icon='cloud-upload', disabled) Disabled
</template>

<script>
export default {
  data () {
    return {
      files1: [],
      files2: [],
      files3: [],
      files4: [],
    }
  },
}
</script>
