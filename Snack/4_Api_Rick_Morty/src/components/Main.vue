<script>
//API
import axios from 'axios';
import { store } from '../store';
import Search from './Search.vue'
import Card from './Card.vue';
export default {
  name: 'Main',
  components: {
    Search,
    Card
  },
  data() {
    return {
      store
    }
  },
  methods: {
    apiCall() {
      //oggetto per chiamata API
      const params = {

      }
      //STATUS se il campo è popolato aggiungo chiavi al mio params
      if (this.store.status) {
        params.status = this.store.status
      };
      //RICERCA name
      if (this.store.searchName) {
        params.name = this.store.searchName
      };
      //chiamata
      axios.get(this.store.apiUrl, {
        params,
      }).then((response) => {
        console.log(response.data)
        //collegamento chiavi API
        this.store.character = response.data.results;
        this.store.info = response.data.info;
      });
    }
  },
  //chiamata api 
  created() {
    this.apiCall()
  },
}
</script>

<template>
  <div class="container my-5">
    <div>
      <Search @status_selezionato="apiCall()" @ricerca_name="apiCall()" @next_page="apiCall()" @prev_page="apiCall()" />
      <div class="row row-cols-5">
        <div class="col my-2" v-for="(card, index) in store.character" :key="`key-is-${index}`">
          <Card :img="card.image" :name="card.name" :status="card.status" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>