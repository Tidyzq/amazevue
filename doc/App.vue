<template lang='jade'>
  #app
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src='amazeui/dist/css/amazeui.css'></style>
<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  & h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }
}
</style>
