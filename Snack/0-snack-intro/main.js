'use strict'
console.log('collegato');
//vue
const { createApp } = Vue
createApp({
    data() {
        return {
            text: 'Immagine di una donna con uno strano cappello',
            //salvo i dati della foto
            img: {
                src: 'img/img_0.png',
                alt: 'foto'
            }
        }
    },
}).mount('#app')