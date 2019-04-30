<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'app',
  created(){
    this.getdata()
  },
  data(){
    return{
      titleName: '',
      des: '',
      img: '',
    }
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
      meta: [
        { property: 'og:title', content: '我是标题啊'},
        { property: 'og:image', content: '' },
      ],
    }
}
</script>
