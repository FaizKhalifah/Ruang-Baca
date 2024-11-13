<template>
    <adminLayout>
        <adminBooksCard/>
    </adminLayout>
</template>
<script>
    import adminLayout from '@/components/layout/adminLayout.vue';
    import adminBooksCard from '@/components/card/admin/adminBooksCard.vue';
    export default{
        name:'adminBooksView',
        components:{
            adminLayout,
            adminBooksCard
        }
    }
</script>