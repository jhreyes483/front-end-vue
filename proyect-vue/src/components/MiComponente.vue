
<template>
    <hr>
    <div id="miComponente">
<div class="card card-body">
    <h1> Este es mi componente</h1>
</div>
        <h2>{{ subtitulo }}</h2>

        <div class="btn btn-primary" >aca</div>
    </div>
    <hr>
</template>

<script>
export default {
    name: "MiComponente",
    data() {
        return {
            subtitulo: 'Soy el subtitulo de mi componente'
        }
    }
}
</script>