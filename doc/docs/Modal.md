# Modal

## Basic

<am-button @click="modal1 = !modal1">Show</am-button>

:::demo
```html
<am-modal v-model="modal1" title="Modal">
  <p>this is a modal</p>
  <span class="am-modal-btn" slot="footer" @click="modal1 = false">Confirm</span>
  <span class="am-modal-btn" slot="footer" @click="modal1 = false">Cancel</span>
</am-modal>
```
:::

## Close Button

<am-button @click="modal2 = !modal2">Show</am-button>

:::demo
```html
<am-modal v-model="modal2" title="Modal" close-button="close-button">
  <p>this is a modal with close button</p>
  <span class="am-modal-btn" slot="footer" @click="modal2 = false">Confirm</span>
  <span class="am-modal-btn" slot="footer" @click="modal2 = false">Cancel</span>
</am-modal>
```
:::

## Multiple Modal

<am-button @click="modal3 = !modal3">Show</am-button>

:::demo
```html
<am-modal v-model="modal4" title="Modal" :z-index="1" close-button="close-button">
  <p>Another Modal</p>
</am-modal>
<am-modal v-model="modal3" title="Modal">
  <span class="am-modal-btn" slot="footer" @click="modal4 = true">Another</span>
  <span class="am-modal-btn" slot="footer" @click="modal3 = false">Cancel</span>
</am-modal>
```
:::

## Dimmer Close

<am-button @click="modal5 = !modal5">Show</am-button>

:::demo
```html
<am-modal v-model="modal5" title="Modal" dimmer-close="dimmer-close">
  <p>you can close this modal by clicking outside the modal</p>
</am-modal>
```
:::

<script>
import PageMixin from '@/mixins/page'

export default {
  mixins: [
    PageMixin,
  ],
  data () {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
    }
  },
}
</script>
