<template lang='jade'>
  .am-file-select
    am-button.am-file-select-btn(:type='type', :shape='shape', :size='size', :icon='icon', :disabled='disabled', @click='OnClickBtn')
      slot
    input(ref='file', type='file', @change='OnFileChange', :multiple='multiple')
</template>

<script>
import AmButton from './Button'

export default {
  name: 'AmFileSelect',
  components: {
    AmButton,
  },
  props: {
    value: Array,
    multiple: Boolean,
    disabled: Boolean,
    icon: String,
    shape: String,
    size: String,
    type: String,
  },
  data () {
    return {}
  },
  methods: {
    OnClickBtn () {
      this.$refs.file.click()
    },
    OnFileChange (e) {
      const files = [], fileList = e.target.files
      for (var i = 0; i < fileList.length; i++) {
        files.push(fileList.item(i))
      }
      this.$emit('input', files)
    },
  },
}
</script>

<style lang='less' scoped>

.am-file-select {
  display: inline-block;
  position: relative;
  overflow: hidden;
  .am-file-select-btn {
    width: 100%;
  }
  input[type=file] {
    display: none;
  }
}

</style>
