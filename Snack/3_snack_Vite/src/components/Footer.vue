<script>
export default {
    name: 'Footer'
}
</script>
<template>
    <footer>
        <div class="container">
            <h2>Tutti i diritti riservati 2024</h2>
        </div>
    </footer>
</template>
<style scoped lang="scss">
footer {
    background-color: #3b4045;
    color: white;
    padding: 1rem 0;

    .container {
        max-width: 1200px;
        margin: 0 auto; // Centra il contenitore
        padding: 0 1rem;

        h2 {
            font-size: 10px;
        }
    }
}
</style>