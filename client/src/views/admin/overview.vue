<template>
    <adminLayout>
        <adminOverviewCard/>
    </adminLayout>
</template>

<script>
    import adminLayout from '@/components/layout/adminLayout.vue';
    import adminOverviewCard from '@/components/card/admin/adminOverviewCard.vue';
    export default{
        name:'dashboardView',
        components:{
            adminLayout,
            adminOverviewCard
        }
    }

</script>