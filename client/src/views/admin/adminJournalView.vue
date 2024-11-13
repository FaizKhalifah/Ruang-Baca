<template>
    <adminLayout>
        <adminJournalsCard/>
    </adminLayout>
</template>
<script>
    import adminLayout from '@/components/layout/adminLayout.vue';
    import adminJournalsCard from '@/components/card/admin/adminJournalsCard.vue';
    export default{
        name:"adminJournalViewComponent",
        components:{
            adminLayout,
            adminJournalsCard
        }
    }
</script>