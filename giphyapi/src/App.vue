<template>
  <div id="app">
    <search></search>
    
  </div>
</template>

<script>
import search from '.components/search.vue'

export default {
  name: 'app',
  components: { search}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  font-weight: normal;
}


a {
  color: #42b983;
}
</style>
