<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  created(){
    this.getdata()
  },
  methods: {
    getdata(){
      axios.get('https://www.easy-mock.com/mock/5cc804f971639a150fce2fcd/api/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
    head: {
    title: {
      inner: 'It will be a pleasure'
    },
    // Meta tags
    meta: [
      // Facebook / Open Graph
      { property: 'fb:app_id', content: '123456789' },
      { property: 'og:title', content: 'Content Title' },
      { property: 'og:image', content: 'http://p98.pstatp.com/large/pgc-image/15331766316513c010b5e01' },
    ],
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
