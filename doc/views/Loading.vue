<template lang='jade'>
.loading-page.am-container
  h1 Loading
  h2 Basic
  am-button(@click='SwitchLoading1') Switch
  am-loading(:loading='loading1')
    am-table(:data='table1', hover)
      am-table-column(prop='label', label='Label')
      am-table-column(prop='value', label='Value')
  pre
    | am-loading(:loading='loading1')
    |   am-table(:data='table1', hover)
    |     am-table-column(prop='label', label='Label')
    |     am-table-column(prop='value', label='Value')
  h2 Text
  am-loading(:loading='true', text='loading...')
    am-table(:data='table1', hover)
      am-table-column(prop='label', label='Label')
      am-table-column(prop='value', label='Value')
  pre
    | am-loading(:loading='true', text='loading...')
    |   am-table(:data='table1', hover)
    |     am-table-column(prop='label', label='Label')
    |     am-table-column(prop='value', label='Value')
</template>

<script>
export default {
  data () {
    return {
      loading1: true,
      table1: [
        {
          label: 'A',
          value: 3,
        }, {
          label: 'B',
          value: 1,
        }, {
          label: 'C',
          value: 2,
        }, {
          label: 'D',
          value: 4,
        },
      ],
    }
  },
  methods: {
    SwitchLoading1 () {
      this.loading1 = !this.loading1
    },
  },
}
</script>
