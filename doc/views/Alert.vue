<template lang='jade'>
.alert-page.am-container
  h1 Alert
  h2 Basic
  am-alert(type='default', title='Default')
  am-alert(type='primary', title='Primary')
  am-alert(type='secondary', title='Secondary')
  am-alert(type='success', title='Success')
  am-alert(type='warning', title='Warning')
  am-alert(type='danger', title='Danger')
  pre
    | am-alert(type='default', title='Default')
    | am-alert(type='primary', title='Primary')
    | am-alert(type='secondary', title='Secondary')
    | am-alert(type='success', title='Success')
    | am-alert(type='warning', title='Warning')
    | am-alert(type='danger', title='Danger')
  h2 Description
  am-alert(type='primary', title='Primary', description='This is an alert')
  pre
    | am-alert(type='primary', title='Primary', description='This is an alert')
  h2 Closeable
  am-alert(type='primary', title='Primary', description='This is an alert', closeable)
  pre
    | am-alert(type='primary', title='Primary', description='This is an alert', closeable)
  h2 Show Icon
  am-alert(type='default', title='Default', show-icon)
  am-alert(type='primary', title='Primary', show-icon)
  am-alert(type='secondary', title='Secondary', show-icon)
  am-alert(type='success', title='Success', show-icon)
  am-alert(type='warning', title='Warning', show-icon)
  am-alert(type='danger', title='Danger', show-icon)
  pre
    | am-alert(type='default', title='Default', show-icon)
    | am-alert(type='primary', title='Primary', show-icon)
    | am-alert(type='secondary', title='Secondary', show-icon)
    | am-alert(type='success', title='Success', show-icon)
    | am-alert(type='warning', title='Warning', show-icon)
    | am-alert(type='danger', title='Danger', show-icon)
  h2 Show Icon with Description
  am-alert(type='primary', title='Primary', description='This is an alert', closeable, show-icon)
  pre
    | am-alert(type='primary', title='Primary', description='This is an alert', closeable, show-icon)
</template>

<script>
export default {

}
</script>
