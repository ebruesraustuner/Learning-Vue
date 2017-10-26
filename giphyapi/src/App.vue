<template>
  <div id="app">
    <search v-on:SearchRequested="handleSearch"></search>
    <p v-if="isLoading"><b> It's Loading.Please Wait.</b></p>
    <preview :gifs=gifs></preview>
  </div>
</template>

<script>
import search from './components/search.vue'
import preview from './components/preview.vue'


export default {
  name: 'app',
  components: { 
    'search': search, 
    'preview': preview
  },
  data() {
    return {
      isLoading: true,
      gifs: []
    }
  },
  methods: {
    doQuery(url) {
    fetch(url)
    .then((res) => { return res.json() } )
        .then((res) => { 
          this.gifs = res.data;
          this.isLoading = false;
        })
  },
    handleSearch(query) {
      this.gifs = [];
      this.isLoading = true;
      const url = (`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=sdjbcCwbsIcxcjSAJGlUOpH5mdfJWVrV`)
      this.doQuery(url)
  }
},
  created() {
    const url = ('http://api.giphy.com/v1/gifs/trending?api_key=sdjbcCwbsIcxcjSAJGlUOpH5mdfJWVrV')
    this.doQuery(url)
  }
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
