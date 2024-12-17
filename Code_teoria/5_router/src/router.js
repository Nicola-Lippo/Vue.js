//import nel nostro file due metodi: createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';
//import page
import AppHome from './pages/AppHome.vue';
import AppBlog from './pages/AppBlog.vue';
//rotta di fallback
import NotFound from './pages/NotFound.vue';
//variabile const che memorizzerà il valore restituito da createRouter. esportare
// Il metodo createRouter riceve come parametro un oggetto con le seguenti proprietà: history e routes.
const router = createRouter({
    //La proprietà history sarà valorizzata tramite il metodo createWebHistory per  la navigazione del browser.
    history: createWebHistory(),
    // La proprietà routes sarà valorizzata con un array di oggetti.
    routes: [
        //rotte navigabili
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
});
//Alla fine del nostro file esportiamo questa costante.
export { router };