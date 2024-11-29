<script>
//1-importare un componente
import HelloWorld from './components/HelloWorld.vue';
//2-registro componenti
export default {
  components: {
    HelloWorld
  }
}
</script>

<template>
  <h3>diretto in app</h3>
  <!--3-uso componente-->
  <HelloWorld />
</template>

<style></style>
