<template lang='jade'>
.message-page.am-container
  h1 Message
  h2 Basic
  am-button(@click='message1 = true') Show
  am-message(v-model='message1', title='Message', message='message 1')
  pre
    | am-message(v-model='message1', title='Message', message='message 1')
  h2 Placement
  am-button(@click='message2 = true') Top Left
  am-button(@click='message3 = true') Top
  am-button(@click='message4 = true') Top Right
  am-message(v-model='message2', title='Top Left', placement='top-left')
  am-message(v-model='message3', title='Top', placement='top')
  am-message(v-model='message4', title='Top Right', placement='top-right')
  pre
    | am-message(v-model='message2', title='Top Left', placement='top-left')
    | am-message(v-model='message3', title='Top', placement='top')
    | am-message(v-model='message4', title='Top Right', placement='top-right')
  h2 Type
  am-button(type='primary', @click='message5 = true') Primary
  am-button(type='secondary', @click='message6 = true') Secondary
  am-button(type='success', @click='message7 = true') Success
  am-button(type='warning', @click='message8 = true') Warning
  am-button(type='danger', @click='message9 = true') Danger
  am-message(v-model='message5', title='Primary', type='primary')
  am-message(v-model='message6', title='Secondary', type='secondary')
  am-message(v-model='message7', title='Success', type='success')
  am-message(v-model='message8', title='Warning', type='warning')
  am-message(v-model='message9', title='Danger', type='danger')
  pre
    | am-message(v-model='message5', title='Primary', type='primary')
    | am-message(v-model='message6', title='Secondary', type='secondary')
    | am-message(v-model='message7', title='Success', type='success')
    | am-message(v-model='message8', title='Warning', type='warning')
    | am-message(v-model='message9', title='Danger', type='danger')
  h2 Duration
  am-button(type='success', @click='message10 = true') Duration
  am-message(v-model='message10', title='Success', message='success message', type='success', placement='top-right', :duration='2000')
  pre
    | am-message(v-model='message10', title='Success', message='success message', type='success', placement='top-right', :duration='2000')
</template>

<script>
export default {
  data () {
    return {
      message1: false,
      message2: false,
      message3: false,
      message4: false,
      message5: false,
      message6: false,
      message7: false,
      message8: false,
      message9: false,
      message10: false,
    }
  },
}
</script>
