<template>
    <adminLayout>
        <adminEditJournalCard/>
    </adminLayout>
</template>
<script>
    import adminEditJournalCard from '@/components/card/admin/Journals/adminEditJournalCard.vue';
    import adminLayout from '@/components/layout/adminLayout.vue';
    export default{
        name:"adminEditJournalView",
        components:{
            adminEditJournalCard,
            adminLayout
        }
    }
</script>