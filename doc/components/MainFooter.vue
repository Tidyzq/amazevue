<template lang='jade'>
footer
  .am-container
    | Amazevue {{ version }} (c) {{ new Date().getFullYear() }} Tidyzq
</template>

<script>
import amazevue from 'module/amazevue'

export default {
  name: 'main-footer',
  computed: {
    version () {
      return amazevue.version
    },
  },
}
</script>

<style lang='css' scoped>
footer {
  height: 50px;
  background: #f8f8f8;
  border-top: 1px solid #dedede;
  line-height: 50px;
}
</style>
