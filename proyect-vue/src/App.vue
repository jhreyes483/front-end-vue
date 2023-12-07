<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div style="background: blue;">
      Desde app
      <MiComponente></MiComponente>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue';
//import './assets/js/bootstrap.bundle.min.js';
//import './assets/js/popper.min.js';
//import './assets/js/bootstrap.min.js';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MiComponente
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
  margin-top: 60px;
}

@import './assets/css/bootstrap.min.css';
</style>

