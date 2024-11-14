<template>
    <adminLayout>
        <adminAddBookCard/>
    </adminLayout>
</template>
<script>
    import adminAddBookCard from '@/components/card/admin/Books/adminAddBookCard.vue';
    import adminLayout from '@/components/layout/adminLayout.vue';
    export default{
        name:"adminAddBookView",
        components:{
            adminAddBookCard,
            adminLayout
        }
    }
</script>