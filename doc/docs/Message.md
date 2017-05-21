# Message

## Basic

<am-button @click="message1 = true">Show</am-button>

:::demo
```html
<am-message v-model="message1" title="Message" message="message 1"></am-message>
```
:::

## Placement

<am-button @click="message2 = true">Top Left</am-button>
<am-button @click="message3 = true">Top</am-button>
<am-button @click="message4 = true">Top Right</am-button>

:::demo
```html
<am-message v-model="message2" title="Top Left" placement="top-left"></am-message>
<am-message v-model="message3" title="Top" placement="top"></am-message>
<am-message v-model="message4" title="Top Right" placement="top-right"></am-message>
```
:::

## Type

<am-button type="primary" @click="message5 = true">Primary</am-button>
<am-button type="secondary" @click="message6 = true">Secondary</am-button>
<am-button type="success" @click="message7 = true">Success</am-button>
<am-button type="warning" @click="message8 = true">Warning</am-button>
<am-button type="danger" @click="message9 = true">Danger</am-button>

:::demo
```html
<am-message v-model="message5" title="Primary" type="primary"></am-message>
<am-message v-model="message6" title="Secondary" type="secondary"></am-message>
<am-message v-model="message7" title="Success" type="success"></am-message>
<am-message v-model="message8" title="Warning" type="warning"></am-message>
<am-message v-model="message9" title="Danger" type="danger"></am-message>
```
:::

## Duration

<am-button type="success" @click="message10 = true">Duration</am-button>

:::demo
```html
<am-message v-model="message10" title="Success" message="success message" type="success" placement="top-right" :duration="2000"></am-message>
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
