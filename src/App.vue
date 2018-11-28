<script>
import Header from './layouts/header/header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
