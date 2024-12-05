<script>
export default {
  name: 'Card',
  props: ['img', 'name', 'status']
}
</script>

<template>
  <div class="card h-100">
    <img :src="img" class="card-img" :alt="name">
    <div class="card-body">
      <div class="card-text">Nome: <strong>{{ name }}</strong></div>
      <div class="card-text">Status: <em>{{ status }}</em></div>
    </div>
  </div>
</template>

<style scoped></style>