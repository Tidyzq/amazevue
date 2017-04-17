<template lang='jade'>
  .am-checkbox-group
    slot
</template>

<script>
export default {
  name: 'AmCheckboxGroup',
  props: {
    value: Array,
  },
  created () {
    this._checkboxGroup = true
  },
}
</script>
