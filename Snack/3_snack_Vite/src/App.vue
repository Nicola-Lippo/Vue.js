<script>
//import componenti
import Header from "./components/Header.vue";
import Footer from "./components/Footer.Vue";
import Main from "./components/Main.vue";
export default {
    //registrazione componente
    components: {
        Header,
        Main,
        Footer
    }
}
</script>

<template>
    <Header />
    <Main />
    <Footer />
</template>

<style scoped></style>
