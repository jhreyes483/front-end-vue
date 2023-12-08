<template>
    <section id="content">
        <h2>Mi componente</h2>


        <hr>
        <h2>Reactividad</h2>
        <div class="col-md-4 mx-auto">
            <input type="text" v-model="nombre" class="form-control">
        </div>
       <b>{{ nombre }}</b> 
       <pre>
        {{ $data }}
       </pre>
    </section>
</template>

<script>
export default {
    name: "MiComponent",
    data() {
        return {
            subtitulo: 'Soy el subtitulo de mi componente',
            nombre: ''
        }
    }
}
</script>