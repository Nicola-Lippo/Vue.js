'use strict'
console.log('collegato');
//vue
const { createApp } = Vue
const objApp = {
    data() {
        return {
            title: 'Test con API di Boolean',
            //array vuoto di partenza
            emails: [],
            maxEmail: 10,
            url: 'https://flynn.boolean.careers/exercises/api/random/mail'
        };
    },
    methods: {
        apiCall() {
            for (let i = 0; i < this.maxEmail; i++) {
                axios.get(this.url).then((resp) => {
                    console.log(resp.data.response);
                    this.emails.push(resp.data.response);
                });
            }
        },
    },
    created() {
        console.log('axios chiamato');
        this.apiCall();
    },
};
const app = createApp(objApp);
app.mount('#app');
