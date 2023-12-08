<template>
    <h1>{{ page_title }}</h1>

    <div class="row container mx-auto mt-4">
        <div class="col-md-9 ">
            <hr>
            <div v-for="pelicula in peliculas" v-bind:key="pelicula.title" class="card body-with-card-item bg-light">
                <div class="card-body row">
                    <div class="col-md-4 img-article">
                        <img class="" :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title">
                    </div>

                    <div class="float-start col-md-8 row p-0">
                        <h4 class="mt-4"><b class="float-start">{{ pelicula.title }}</b></h4>
                        <p class="float-start m-0 pt-0">
                            <span class="float-start text-muted" v-bind:class="{
                                yeargreen: pelicula.year >= 2015,
                                yearblue: pelicula.year < 2015

                            }" 
                            >{{ pelicula.year }}</span>
                        </p>
                        <p class="float-start ">
                            <span class="float-start font-2">Ver mas</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <AppSidevar></AppSidevar>
    </div>
</template>
<script>
import AppSidevar from "./AppSidevar.vue";

export default {
    name: 'FilmsPage',
    components: {
        AppSidevar
    },

    data() {
        return {
            page_title: 'Peliculas',
            peliculas: [
                {
                    title: 'Batman vs Superman', year: 2017, image: 'https://th.bing.com/th/id/OIP.zMx80zHI-D6BfF_I2EcdbgHaEy?rs=1&pid=ImgDetMain'
                },
                {
                    title: 'Gran tolino', year: 2015, image: 'https://th.bing.com/th/id/R.da1017d89b00fef93acec505989e6d79?rik=ZgC4sn61FOcfiA&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fstill%2fgran_torino29.jpg&ehk=SN2Lu44WRn3gvsnuzYCxputXef%2bDvXq1AdratsLc7kQ%3d&risl=&pid=ImgRaw&r=0'
                },
                {
                    title: 'El señor de los anillo', year: 2003, image: 'https://th.bing.com/th/id/OIP.zK6rmYdX5_m6tCOQs_5vmAHaEK?rs=1&pid=ImgDetMain'
                }
            ]
        }
    }
}
</script>