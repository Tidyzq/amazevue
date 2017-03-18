<template lang='jade'>
  .am-g(:class='classes')
    slot
</template>

<script>
export default {
  props: {
    gutter: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    classes () {
      return [`am-neg-margin-horizontal-${this.gutter}`]
    }
  }
}
</script>

<style lang='less'>
@import '../less/variables.less';

.am-neg-margin-horizontal-0 {
  margin-left: 0!important;
  margin-right: 0!important;
}

.am-neg-margin-horizontal-xs {
  margin-left: -@spacing-xs!important;
  margin-right: -@spacing-xs!important;
}

.am-neg-margin-horizontal-sm {
  margin-left: -@spacing-sm!important;
  margin-right: -@spacing-sm!important;
}

.am-neg-margin-horizontal-md {
  margin-left: -@spacing-md!important;
  margin-right: -@spacing-md!important;
}

.am-neg-margin-horizontal-lg {
  margin-left: -@spacing-lg!important;
  margin-right: -@spacing-lg!important;
}

.am-neg-margin-horizontal-xl {
  margin-left: -@spacing-xl!important;
  margin-right: -@spacing-xl!important;
}
</style>
