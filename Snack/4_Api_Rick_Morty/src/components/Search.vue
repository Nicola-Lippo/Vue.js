<script>
import { store } from '../store';
export default {
  name: 'Search',
  data() {
    return {
      store
    }
  },
  methods: {
    prev() {
      if (this.store.info.prev) {
        this.store.apiUrl = this.store.info.prev;
        this.$emit("prev_page");
      }

    },
    next() {
      if (this.store.info.next) {
        this.store.apiUrl = this.store.info.next;
        this.$emit("next_page");
      }

    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-around align-items-center gap-3 py-3">
    <!--Bottone prev-->
    <button type="button" class="btn btn-primary" @click="prev()">prev</button>
    <!--input ricerca-->
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Cerca" aria-label="Recipient's username"
        aria-describedby="button-addon2" v-model="store.searchName" @change="$emit('ricerca_name')">
      <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
    </div>
    <!--select ricerca-->
    <select class="form-select" aria-label="Default select example" @change="$emit('status_selezionato')"
      v-model="store.status">
      <option value="" selected>All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    <!--Bottone next-->
    <button type="button" class="btn btn-primary" @click="next()">next</button>
  </div>
</template>

<style scoped></style>