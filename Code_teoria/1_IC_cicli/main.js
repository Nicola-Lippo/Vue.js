'use strict'
console.log('collegato');
//vue
const { createApp } = Vue
/* createApp({
    data() {
        return {
            chiave: 'valore'
        }
    },
}).mount('#app'); */
//metodo alternativo
const objApp = {
    data() {
        return {
            title: 'Demo Istruzioni condizionali e Cicli',
            //modifica false/true
            vIf: true,
            //v-else-if
            type: 'A',
            //v-for
            animals: ["Leone", "Elefante", "Giraffa", "Cane", "Delfino"],
            animals2: [
                { nome: "Leone", tipo: "Mammifero" },
                { nome: "Elefante", tipo: "Mammifero" },
                { nome: "Giraffa", tipo: "Mammifero" },
                { nome: "Cane", tipo: "Mammifero" },
                { nome: "Delfino", tipo: "Mammifero acquatico" }
            ],
            number: 10
        }
    },
    methods: {
        functionIf() {
            return true;
        }
    }
};
const app = createApp(objApp);
app.mount('#app');
