<template lang='jade'>
  .am-checkbox-group
    slot
</template>

<script>
export default {
  props: {
    value: Array
  },
  created () {
    this._checkboxGroup = true
  }
}
</script>
