<template>
  <div class="main">
   <div class="placeSch">
      <input type="text" name="placeSch" id="placeSch" />
      <button >검색</button>
   </div>
   <div class="nowLocalSch">
      <router-link to="/hotmap">현재 위치에서 검색</router-link>
      <!-- <button @click="fnNowLocalSch">현재 위치에서 검색</button> -->
      
   </div> 
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  created(){
    axios.get('http://localhost:8081/vue/main.do')
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  },
  methods:{
    fnNowLocalSch: function(){
      
    }
  },
}

</script>

<style>
  .main{
    background-image: url('../assets/mainView.png');
    width:100%;
    height: 100vh;
    background-size: cover;
  }
</style>
