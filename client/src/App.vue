<template>
  <div id="app">
    <navbar />
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
