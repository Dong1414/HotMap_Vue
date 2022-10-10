<template>
  <nav>
    <!-- <router-link to="/about">About</router-link> -->
    <HeaderView/>
  </nav>
  <router-view/>
</template>

<script>
import HeaderView from './views/HeaderView.vue';

export default {
  components: {
    HeaderView,
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
