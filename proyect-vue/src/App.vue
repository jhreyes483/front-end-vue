<template>
  <AppHeader></AppHeader>
  <AppSlider></AppSlider>

  <router-view></router-view>
<!-- 
  <AppBody></AppBody>
 -->

  <AppFooter></AppFooter>

<!-- 
  <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div style="background: blue;">
      Desde app
      <MiComponente></MiComponente>
    </div>
 -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MiComponente from './components/MiComponente.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import AppSlider from './components/AppSlider.vue';
//import AppBody from './components/AppBody.vue';
//import './assets/js/bootstrap.bundle.min.js';
//import './assets/js/popper.min.js';
//import './assets/js/bootstrap.min.js';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSlider,
   
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

@import '../public/css/bootstrap.min.css';
@import '../public/css/jav.css';
</style>

