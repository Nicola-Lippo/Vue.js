'use strict'
console.log('collegato');
//vue
const { createApp } = Vue
const objApp = {
    data() {
        return {
            title: 'Test birre con API',
            //array vuoto di partenza
            beers: [],
            url: 'https://api.sampleapis.com/beers/ale'
        };
    },
    methods: {
        //chiamata API con axios
        apiCall() {
            //.get = tipo di chiamata che vogliamo fare
            //.then = quando avviene la risposta
            axios.get(this.url).then((resp) => {
                console.log(resp);
                this.beers = resp.data;
            });
        },
    },
    created() {
        console.log('axios chiamato');
        this.apiCall();
    },
};
const app = createApp(objApp);
app.mount('#app');
