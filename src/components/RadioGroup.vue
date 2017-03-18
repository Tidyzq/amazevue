<template lang='jade'>
  .am-radio-group
    slot
</template>

<script>
export default {
  props: {
    value: [String, Number, Boolean]
  },
  created () {
    this._radioGroup = true
  }
}
</script>
