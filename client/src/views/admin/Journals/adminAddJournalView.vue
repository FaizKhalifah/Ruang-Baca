<template>
    <adminLayout>
        <adminAddJournalCard/>
    </adminLayout>
</template>
<script>
    import adminAddJournalCard from '@/components/card/admin/Journals/adminAddJournalCard.vue';
    import adminLayout from '@/components/layout/adminLayout.vue';
    export default{
        name:"adminAddJournalView",
        components:{
            adminAddJournalCard,
            adminLayout
        }
    }
</script>