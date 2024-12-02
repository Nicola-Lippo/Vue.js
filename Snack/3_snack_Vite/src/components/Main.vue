<script>
import CardImg from "./CardImg.vue"
//data
import Data from "../data/Data.json"
export default {
    name: 'Main',
    data() {
        return {
            Data
        }
    },
    components: {
        CardImg,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="col-33" v-for="(product, index) in Data" :key="index">
                <CardImg :img="product.frontImage" :backImage="product.backImage" :marca="product.brand"
                    :nome="product.name" :prezzo="product.price" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .col-33 {
        width: calc(100% / 3);
    }
}
</style>