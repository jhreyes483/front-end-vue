<template>
    <div id="carouselExampleIndicators" class="carousel slide container mt-4 slider" data-bs-ride="carousel">
       <h1> {{ texto }}</h1>
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://th.bing.com/th/id/R.7d6c2857bdb2482a578078bcadf1f4a7?rik=Vf%2bC%2feMGCt3pDg&pid=ImgRaw&r=0"
                    class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://mobirise.com/extensions/techm4/assets/images/background2.jpg" class="d-block w-100"
                    alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://mobirise.com/extensions/techm4/assets/images/background2.jpg" class="d-block w-100"
                    alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        

    </div>
    <route-link v-if="showBtn" to="/blog" class="btn btn-sm btn-success mt-1">Blog</route-link>
</template>

<script>
export default {
    name: 'AppSlider',
    props: ['texto', 'showBtn']



}
</script>