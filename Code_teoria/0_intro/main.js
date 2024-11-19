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
            console.log('hai premuto il bottone ' + this.color);
        }
    },
    /****************************************************/
    //metodi(uncini) per rimanere in ascolto durante i cicli di vita di Vue, 'non importa l'ordine' 
    //avere il controllo delle fasi di vita dell'applicativo
    beforeCreate() {
        //undefined
        console.log(this.text);
        console.log('sono beforeCreate e sono il 1');
    },
    //ho accesso hai dati e metodi del mio applicativo solo dopo che è stato creato
    created() {
        console.log(this.text);
        console.log('sono created e sono il 2');
    },
    beforeMount() {
        console.log(this.text);
        console.log('sono beforeMount e sono il 3');
    },
    mounted() {
        console.log(this.text);
        console.log('sono beforeCreate e sono il 4');
    },
    /****************************************************/
    //si attivano quando il dato cambia e quando il DOM si aggiorna
    beforeUpdate() {
        console.log(this.proveOne);
        console.log('sono beforeUpdate');
    },
    updated() {
        /*le funzioni freccia non creano il loro contesto di esecuzione, 
        ma prendono quello di dove sono state dichiarate*/
        setTimeout(() => {
            console.log(this.proveOne);
        }, 2000);
        console.log('sono updated');
    }
}).mount('#app')