<template lang='jade'>
.modal-page.am-container
  h1 Modal
  h2 Basic
  am-modal(v-model='modal1', title='Modal')
    p this is a modal
    span.am-modal-btn(slot='footer', @click='modal1 = false') Confirm
    span.am-modal-btn(slot='footer', @click='modal1 = false') Cancel
  am-button(@click='modal1 = !modal1') Show
  pre
    | am-modal(v-model='modal1', title='Modal')
    |   p this is a modal
    |   span.am-modal-btn(slot='footer', @click='modal1 = false') Confirm
    |   span.am-modal-btn(slot='footer', @click='modal1 = false') Cancel
    | am-button(@click='modal1 = !modal1') Show
  h2 Close Button
  am-modal(v-model='modal2', title='Modal', close-button)
    p this is a modal with close button
    span.am-modal-btn(slot='footer', @click='modal2 = false') Confirm
    span.am-modal-btn(slot='footer', @click='modal2 = false') Cancel
  am-button(@click='modal2 = !modal2') Show
  pre
    | am-modal(v-model='modal2', title='Modal')
    |   p this is a modal with close button
    |   span.am-modal-btn(slot='footer', @click='modal2 = false') Confirm
    |   span.am-modal-btn(slot='footer', @click='modal2 = false') Cancel
    | am-button(@click='modal2 = !modal2') Show
  h2 Multiple Modal
  am-modal(v-model='modal4', title='Modal', :z-index='1', close-button)
    p Another Modal
  am-modal(v-model='modal3', title='Modal')
    span.am-modal-btn(slot='footer', @click='modal4 = true') Confirm
    span.am-modal-btn(slot='footer', @click='modal3 = false') Cancel
  am-button(@click='modal3 = !modal3') Show
  pre
    | am-modal(v-model='modal4', title='Modal', :z-index='1', close-button)
    |   p Another Modal
    | am-modal(v-model='modal3', title='Modal')
    |   span.am-modal-btn(slot='footer', @click='modal4 = true') Confirm
    |   span.am-modal-btn(slot='footer', @click='modal3 = false') Cancel
    | am-button(@click='modal3 = !modal3') Show
  h2 Dimmer Close
  am-modal(v-model='modal5', title='Modal', dimmer-close)
    p you can close this modal by clicking outside the modal
  am-button(@click='modal5 = !modal5') Show
  pre
    | am-modal(v-model='modal5', title='Modal', dimmer-close)
    |   p you can close this modal by clicking outside the modal
    | am-button(@click='modal5 = !modal5') Show
</template>

<script>
export default {
  data () {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false
    }
  }
}
</script>
