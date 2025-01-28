<template>
    <homeLayout>
        <userServiceCard/>
    </homeLayout>
</template>
<style scoped>

</style>
<script>
    import homeLayout from '@/components/layout/homeLayout.vue';
    import userServiceCard from '@/components/card/user/service/userServiceCard.vue';
    export default{
        name:"userServiceView",
        components:{
            homeLayout,userServiceCard
        }
    }
</script>