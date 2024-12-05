import { reactive } from 'vue';

export const store = reactive({
    //url per API
    apiUrl: "https://rickandmortyapi.com/api/character",
    //chiavi API
    info: {},
    character: [],
    //variabili
    //select status
    status: '',
    //input ricerca
    searchName: '',
});
