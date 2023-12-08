<template>
  <AppHeader></AppHeader>


  <router-view></router-view>


  <AppFooter></AppFooter>


</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

//import AppSlider from './components/AppSlider.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  //  AppSlider,
   
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

