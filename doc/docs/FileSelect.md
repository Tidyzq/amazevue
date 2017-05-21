# File Select

## Basic

:::demo
```html
<am-file-select v-model="files1" icon="cloud-upload">Single File</am-file-select>

<p><span class="am-badge" v-for="file in files1">{{file.name}}</span></p>
```
:::

## Multiple

:::demo
```html
<am-file-select v-model="files2" multiple="multiple" icon="cloud-upload">Multiple File</am-file-select>

<p><span class="am-badge" v-for="file in files2">{{file.name}}</span></p>
```
:::

## Color

:::demo
```html
<am-file-select type="primary" v-model="files3" icon="cloud-upload">Primary</am-file-select>
<am-file-select type="secondary" v-model="files3" icon="cloud-upload">Secondary</am-file-select>
<am-file-select type="success" v-model="files3" icon="cloud-upload">Success</am-file-select>
<am-file-select type="warning" v-model="files3" icon="cloud-upload">Warning</am-file-select>
<am-file-select type="danger" v-model="files3" icon="cloud-upload">Danger</am-file-select>

<p><span class="am-badge" v-for="file in files3">{{file.name}}</span></p>
```
:::

## Disabled

:::demo
```html
<am-file-select v-model="files3" icon="cloud-upload" disabled="disabled">Disabled</am-file-select>
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
      files1: [],
      files2: [],
      files3: [],
      files4: [],
    }
  },
}
</script>
