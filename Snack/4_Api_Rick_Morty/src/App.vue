<script>
//import componente APP
import Header from './components/Header.vue';
import Main from './components/main.vue';

export default {
    //registro componenti in APP
    components: {
        Header,
        Main
    }
}
</script>

<template>
    <Header />
    <Main />
</template>

<style scoped></style>
