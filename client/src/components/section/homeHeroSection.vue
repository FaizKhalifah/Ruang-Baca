<template>
    <div class="hero">
        <div class="heroContent">
            <h1>Ruang Baca</h1>
            <p>Tempat nyaman menuntut ilmu</p>
        </div>
    </div>
</template>
<style>
    .hero{
        width: 100%;
        background-image: url("../../assets/library.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        padding: 8rem 2rem;
    }

    .heroContent{
        text-align: center;
        margin: 3rem auto;
        color: white;
        font-weight: bold;
        z-index: 1;
    }


    h1{
        font-size: 9rem;
    }

    p{
        font-size: 2rem;
    }
</style>
<script>
    export default{
        name:"homeHeroSectionComponent"
    }
</script>