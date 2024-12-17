<script>
//import componenti
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
