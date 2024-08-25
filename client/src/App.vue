<template>
  <div id="app">
        <router-view v-if="loaded"></router-view>
    </div>
</template>

<script>

export default {
  name: 'App'
 
}
</script>

<style>

</style>
