import { createApp } from 'vue'
import { router } from './router';
import './style.scss'
import App from './App.vue'
//indicare all'istanza di Vue di usare le rotte che abbiamo specificato.
createApp(App).use(router).mount('#app')
