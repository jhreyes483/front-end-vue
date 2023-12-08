<template>
        <AppSlider texto="Pagina"></AppSlider>
    <section id="content">
        <h2>Pagina de pruebas</h2>
        <h3>{{ get_id }}</h3>
        <button class="btn btn-success" @click="updateUserName()">Cambiar nombre</button>
        <button class="btn btn-warning" @click="redirect()">Redirigir a block</button>
        <p class="mt-1"><b> {{  userName }}</b></p>
    </section>
</template>

<script>
import AppSlider from '../AppSlider.vue';
export default {
    name    : "HomePage",
    /** ciclo de vida del componente */
    created(){
        console.log('Componente creado')
    },
    mounted(){
        /** capturar parametros desde url */
        this.get_id = this.$route.params.id;
        console.log('Componente montado')
    },
    updated(){
        console.log('Componente actualizado')
    },
    unmounted(){
        console.log('Componente eliminado')
    },
    /****************** */
    methods: {
        updateUserName(){
           this.userName ="Dev Javier"
           console.log(this.userName, 'this.userName')
        },
        redirect(){
            /** redirecciona a otra url */
            this.$router.push('/blog');
            //this.$router.push('/blog/param');// con parametro por get
        }
    },
    components:{
        AppSlider
    },

    data(){
        return {
            get_id : null,
            userName: "Javier Reyes",
        };
    }
}
</script>