<template>
    <div class="content">
        <homeNavbar/>
        <main>
            <slot>
                
            </slot>
        </main>
    </div>
</template>
<style>

</style>
<script>
    import homeNavbar from '../navbar/homeNavbar.vue';
    export default{
        name:"homeLayoutComponent",
        components:{
            homeNavbar
        }
    }
</script>