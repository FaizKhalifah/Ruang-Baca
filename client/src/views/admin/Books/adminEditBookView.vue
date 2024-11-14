<template>
    <adminLayout>
        <adminEditBookCard/>
    </adminLayout>
</template>
<script>
    import adminEditBookCard from '@/components/card/admin/Books/adminEditBookCard.vue';
    import adminLayout from '@/components/layout/adminLayout.vue';
    export default{
        name:"adminEditBookView",
        components:{
            adminEditBookCard,
            adminLayout
        }
    }
</script>