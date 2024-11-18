'use strict'
console.log('collegato');
//vue
const { createApp } = Vue
createApp({
    data() {
        return {
            text: 'primo lavoro con Vue.js',
            proveOne: 'prova a modificarmi',
            bind: 'bindtwo',
            color: 'red',
            //usare this per passare la funzione hai nostri dati
            firstFunction: this.functionOne()
        }
    },
    methods: {
        functionOne() {
            return 'ciao dalla funzione';
        },
        functionClick() {
            console.log('hai premuto il bottone ' + this.color)
        }

    }
}).mount('#app')