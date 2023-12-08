<template>
    <section id="content">
        <h2>Pagina de pruebas</h2>
        <h3>{{ get_id }}</h3>
    </section>
</template>

<script>
export default {
    name: "HomePage",
    mounted(){
        /** capturar parametros desde url */
        this.get_id = this.$route.params.id;
    },
    data(){
        return {
            get_id : null
        };
    }
}
</script>