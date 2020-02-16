<template>
    <div id="selection-block" class="home-block container-fluid py-10">
        <div class="block-number">
            04
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Une sélection des meilleurs fonds mondiaux</h2>
                        <p class="text-center font-size-18">
                            Les fonds dans lesquels Equinox investit sont sélectionnés selon une méthodologie similaire
                            à celle utilisée par les meilleurs fonds de pension et les meilleurs fonds souverains
                            mondiaux pour leur allocation en private equity.
                        </p>
                    </div>
                </div>
            </div>
            <div id="methodology" class="row justify-content-center align-items-center">
                <div class="col-12 col-md-3 d-flex justify-content-center mb-5">
                    <div id="methodology-headline" class="font-size-26 font-weight-semi-bold text-center">
                        La méthodologie Equinox
                    </div>
                </div>
                <div class="col-md-9 col-12 pl-5">
                    <div class="row">
                        <div v-for="elem of methodology" class="col-12 col-md-4 px-0 methodology-element">
                            <router-link :to="elem.link" @click.native="$scrollToTop">
                                <img class="img-chevron" :src="`img/landing/${elem.imgPath}.svg`" :alt="elem.imgPath"/>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectionBlock",
        data() {
            return {
                methodology: [
                    {
                        imgPath: "noter",
                        link: "rate-best-managers"
                    },
                    {
                        imgPath: "identifier",
                        link: "identify-best-managers"
                    },
                    {
                        imgPath: "garantir",
                        link: "ensure-best-managers"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #methodology {
        margin-top: 60px;

        .img-chevron {
            width: 100%;
            margin: -20px;
        }
    }

    #methodology-headline {
        writing-mode: sideways-lr;
        display: block;
        height: 65%;
    }

    .methodology-element {
        transition: all .2s ease-in-out;
    }

    .methodology-element:hover {
        transform: scale(1.1);
    }
</style>
