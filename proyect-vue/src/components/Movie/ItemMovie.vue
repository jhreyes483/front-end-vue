<template>
    <div class="card-body row">
        <div class="col-md-4 img-article">
            <img class="" :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title">
            <input 
            type="button" 
            class="btn btn-sm btn-warning float-end" 
            value="Marcar como favorito" 
            @click="pasarFavoritaAlPadre(pelicula)"
            >
        </div>

        <div class="float-start col-md-8 row p-0">
            <h4 class="mt-4"><b class="float-start">{{ pelicula.title }}</b></h4>
            <p class="float-start m-0 pt-0">
                <span class="float-start text-muted" v-bind:class="{
                    yeargreen: pelicula.year >= 2015,
                    yearblue: pelicula.year < 2015

                }">{{ pelicula.year }}</span>
            </p>
            <p class="float-start ">
                <a class="float-start font-2">Ver mas</a>
                
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ItemMovie',
    props: ['pelicula'],

    mounted() {
        console.log(this.pelicula)
    },
    methods: {
        pasarFavoritaAlPadre(pelicula) {
            console.log('favorita desde hijo', pelicula)
            this.$emit(/* nombre del evento */ 'favorita',pelicula) /* emite el evento al padre */
        }
    }

}
</script>