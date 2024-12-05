<script>
import { store } from './store';
export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div>{{ store.text }}</div>
  <hr>
  <input type="text" v-model="store.model">
  <div v-if="store.model === ''">Hai scritto ...</div>
  <div v-else>Hai scritto {{ store.model }}</div>
  <hr>
</template>

<style scoped></style>
