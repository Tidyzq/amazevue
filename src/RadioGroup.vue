<template lang='jade'>
  .am-radio-group
    slot
</template>

<script>
export default {
  name: 'AmRadioGroup',
  props: {
    value: [ String, Number, Boolean ],
  },
  created () {
    this._radioGroup = true
  },
}
</script>
