<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container">
            <ul class="nav-links">
                <li>
                    <router-link :to="{ name: 'home' }">
                        Home page
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'blog' }">
                        Blog
                    </router-link>
                </li>
            </ul>
            <div class="title">
                Prove Router Vue.js
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: #007bff;
    color: white;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center; //Allineamento verticale
    }

    .nav-links {
        list-style: none; //Rimuove i punti elenco
        display: flex;
        gap: 1rem; //Spaziatura tra i link

        li {
            a {
                color: white;
                text-decoration: none; //Rimuove la sottolineatura

                &:hover {
                    text-decoration: underline; //Aggiunge la sottolineatura al passaggio del mouse
                }
            }
        }
    }

    .title {
        font-size: 1.2rem;
        font-weight: bold;
    }
}
</style>