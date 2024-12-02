<script>
export default {
    name: 'Header'
}
</script>
<template>
    <header>
        <div class="container">
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Prodotti</li>
                    <li>Contatti</li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped lang="scss">
header {
    background-color: #007bff;
    color: white;
    padding: 1rem 0;

    .container {
        display: flex;
        justify-content: space-between; // Spazio tra gli elementi
        align-items: center;
        max-width: 1200px;
        margin: 0 auto; // Centra il contenitore
        padding: 0 1rem;

        h1 {
            font-size: 1.8rem;
        }

        nav ul {
            display: flex;
            list-style: none;

            li {
                margin: 0 1rem;
                cursor: pointer;

                &:hover {
                    color: #f0f0f0;
                }
            }
        }
    }
}
</style>