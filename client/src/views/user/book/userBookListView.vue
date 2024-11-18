<template>
    <homeLayout>
        <userBookCard/>
    </homeLayout>
</template>
<style>

</style>
<script>
    import homeLayout from '@/components/layout/homeLayout.vue';
    import userBookCard from '@/components/card/user/resources/userBookCard.vue';
    export default{
        name:"userBookListView",
        components:{
            userBookCard,
            homeLayout
        }
    }
</script>