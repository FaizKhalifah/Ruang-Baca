<template>
    <div class="container">
        <adminSidebar/>
    <div class="content">
        <div class="navbar">
            <adminNavbar/>
        </div>
        <main>
            <slot>
                
            </slot>
        </main>
    </div>
    </div>
</template>
<style scoped>

    .content{
        width: 90%;
    }
    .container{
        width: 100%;
        display: flex;
        flex: 1;
    }
</style>
<script>
    import adminNavbar from '../navbar/adminNavbar.vue';
    import adminSidebar from '../sidebar/adminSidebar.vue';
    export default{
        name:'adminLayout',
        components:{
            adminNavbar,
            adminSidebar
        }
    }
</script>