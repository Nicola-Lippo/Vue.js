<script>
//import file JSON -- pulizia codice
import Data from "../data/data.json"
import WorldOne from "./WorldOne.vue";
//esportare il componente, oggetto con chiave name
export default {
  name: 'HelloWorld',
  components: {
    WorldOne
  },
  data() {
    return {
      //Data: Data in Js posso omettere la duplicazione del valore se hanno lo stesso nome  
      Data
    }
  }
};
</script>

<template>
  <div class="prova">
    <h2>Hello World</h2>
  </div>
  <h3>Hello World</h3>
  <hr>
  <div></div>
  <!--PROPS-->
  <ul>
    <WorldOne v-for="(animale, i) in Data" :key="`animale-${i}`" :name="animale.nome" :desc="animale.descrizione" />
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;

  li {
    margin: 10px;
  }

  //per passare lo style scss in profondità(al componenete figlio)
  :deep(em) {
    color: rgb(108, 108, 115);
  }
}

h3 {
  color: aqua;
}
</style>
