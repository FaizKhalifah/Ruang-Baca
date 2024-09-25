<template>
    <div class="container">
        <sidebarComponent/>
    <div class="content">
        <div class="navbar">
            <navbarComponent/>
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
    import navbarComponent from './navbarComponent.vue';
    import sidebarComponent from './sidebarComponent.vue';
    export default{
        name:'adminLayout',
        components:{
            navbarComponent,
            sidebarComponent
        }
    }
</script>