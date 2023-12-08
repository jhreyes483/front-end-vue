<template>
    <section id="content">
        <h2>Mi componente</h2>


        <hr>
        <h2>Reactividad</h2>
        <div class="col-md-4 mx-auto">
            <input type="text" v-model="nombre" class="form-control">
        </div>
        <b>{{ nombre }}</b>
    

        <h2>Directivas condicionales</h2>
        <div class="col-md-4 mx-auto">
            <input type="number" v-model="edad" class="form-control">
            Mi edad es: <b>{{ edad }}</b>
        </div>

        <p v-if="edad && edad >= 18 && edad < 65" style="color:red; font-weight:bold;">
            Eres mayor de edad
        </p>
        <p v-else-if="edad && edad >= 65" style="color:rgb(0, 153, 255); font-weight:bold;">
            Eres de avanzada edad
        </p>

        <p v-else style="color:rgb(0, 255, 55); font-weight:bold;">
            Eres menor de edad
        </p>

        <h4>v-for</h4>
        <ol>
            <li v-for="pelicula in peliculas" :key="pelicula"> {{ pelicula }}</li>
        </ol>

        <div>
            <pre>
        {{ $data }}
       </pre>
        </div>
    </section>
</template>

<script>
export default {
    name: "MiComponent",
    data() {
        return {
            subtitulo: 'Soy el subtitulo de mi componente',
            nombre: '',
            edad: 18,
            peliculas : ['Batman vs Superman', 'El señor de los anillos', 'Spiderman','Anabella']

        }
    }
}
</script>