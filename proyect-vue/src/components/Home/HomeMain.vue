<template>
    <AppSlider :showBtn="true" texto="Inicio"></AppSlider>
  <div>
    <h1> Hola soy componente one</h1>
    <p> componente 1</p>

  </div>
</template>
<script>
import AppSlider from '../AppSlider.vue';
export default {
  name: 'HomeMain',
  components:{
    AppSlider
  }
}
</script>