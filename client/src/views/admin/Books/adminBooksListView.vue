<template>
    <adminLayout>
        <adminBooksListCard/>
    </adminLayout>
</template>
<script>
    import adminLayout from '@/components/layout/adminLayout.vue';
    import adminBooksListCard from '@/components/card/admin/Books/adminBooksListCard.vue';
    export default{
        name:'adminBooksListView',
        components:{
            adminLayout,
            adminBooksListCard
        }
    }
</script>