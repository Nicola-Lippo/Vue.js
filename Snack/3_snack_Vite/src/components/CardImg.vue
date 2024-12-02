<script>
export default {
    name: 'CardImg',
    props: ['img', 'backImage', 'marca', 'nome', 'prezzo']
}
</script>
<template>
    <div class="contenuto">
        <div class="img-shop">
            <img class="img-shop main-img" :src="img" :alt="foto">
            <img class="img-shop hover-img" :src="backImage" :alt="foto">
            <div class="labels">
                <div class="label red">-50 %</div>
                <div class="label green">Sostenibilità</div>
            </div>
            <div class="cuore">
                &hearts;
            </div>
        </div>
        <div>
            <span class="marchio">{{ marca }}</span>
            <p><strong>{{ nome }}</strong></p>
            <span class="prezzo"><strong>{{ prezzo }} $</strong></span>
        </div>
    </div>
</template>
<style scoped lang="scss">
.contenuto {
    margin: 20px;

    .img-shop {
        width: 100%;
        position: relative;

        .main-img {
            display: block;
        }

        .hover-img {
            display: none;
        }

        &:hover {
            .main-img {
                display: none;
            }

            .hover-img {
                display: block;
            }
        }

        .labels {
            position: absolute;
            bottom: 20px;

            .label {
                color: white;
                font-size: 60%;
                padding: 5px;
                display: inline-block;

                &.red {
                    background-color: red;
                }

                &.green {
                    background-color: green;
                }
            }
        }

        .cuore {
            background-color: white;
            position: absolute;
            top: 20px;
            right: 0;
            padding: 10px;
            cursor: pointer;

            &:hover {
                color: red;
            }
        }
    }

    .marchio {
        font-size: 80%;
    }

    .prezzo {
        font-size: 80%;
    }
}
</style>