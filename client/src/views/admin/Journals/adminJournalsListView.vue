<template>
    <adminLayout>
        <adminJournalsListCard/>
    </adminLayout>
</template>
<script>
    import adminLayout from '@/components/layout/adminLayout.vue';
    import adminJournalsListCard from '@/components/card/admin/Journals/adminJournalsListCard.vue';
    export default{
        name:"adminJournalViewComponent",
        components:{
            adminLayout,
            adminJournalsListCard
        }
    }
</script>