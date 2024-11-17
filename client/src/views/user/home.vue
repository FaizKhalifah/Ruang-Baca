<template>
    <homeLayout>
        <div class="content">
            <homeHeroSection/>
        </div>
    </homeLayout>
</template>
<style scoped>
    /* .content{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    } */
</style>
<script>
    import homeHeroSection from '@/components/section/homeHeroSection.vue';
    import homeLayout from '@/components/layout/homeLayout.vue';
    export default{
        name:"homeView",
        components:{
            homeLayout,
            homeHeroSection
        }
    }
</script>