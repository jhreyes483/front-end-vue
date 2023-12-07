<template>
    <div class="row container mx-auto mt-4">
        <div class="col-md-9 ">
            <h1>Ultimos artículos</h1>
            <hr>
            <div class="card body-with-card-item bg-light">
                <div class="card-body row">
                    <div class="col-md-4 img-article">
                        <img class=""
                            src="https://th.bing.com/th/id/R.b55e1249cf941c81fd9286da50675ffb?rik=jafTl7DIq9PYdA&riu=http%3a%2f%2fwww.paredro.com%2fwp-content%2fuploads%2f2015%2f11%2fLOGOS-CUADRADOS-05.png&ehk=Hul%2biz2GvF0Dae6D%2bw0YJ1LlsPaipumZ%2fjVPg6oyU28%3d&risl=&pid=ImgRaw&r=0"
                            alt="">
                    </div>

                    <div class="float-start col-md-8 row p-0">
                        <h4 class="mt-4"><b class="float-start">Articulo de prueba</b></h4>
                        <p class="float-start m-0 pt-0">
                            <span class="float-start text-muted ">Hace 5 minutos</span>
                        </p>
                        <p class="float-start ">
                            <span class="float-start font-2">Ver mas</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-3">

            <div class="">
                <form action="">
                    <div class="card body-with-card bg-light float-end">
                        <div class="card-body ">
                            <b class="font-3">PUEDES HACER ESTO</b>
                            <hr>
                            Encuentra el articulo que buscas
                            <div class="text-center">
                                <input type="submit" value="CREAR ARTÍICULO" class="col-2 form-control mt-3 btn-success">
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="">
                <form action="">
                    <div class="card body-with-card bg-light float-end">
                        <div class="card-body ">
                            <b class="font-3">BUSCADOR</b>
                            <hr>
                            Encuentra el articulo que buscas
                            <input type="text" class="form-control">

                            <div class="text-center">
                                <input type="submit" value="BUSCAR" class="col-2 form-control btn-dark  mt-3">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppBody'
}
</script>