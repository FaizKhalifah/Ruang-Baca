<template>
  <div id="app">
    <navbar />
    <h1>HALOOOOO</h1>
    <router-view />
  </div>
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    navbar
  }
};
</script>

<style>
/* Tambahkan styling sesuai kebutuhan */
</style>
