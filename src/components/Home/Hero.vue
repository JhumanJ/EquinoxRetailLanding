<template>
    <div id="hero-home" class="position-relative gradient-half-purple-v5 z-index-2 overflow-hidden">
        <div class="container mt-7">
            <!-- Title -->
            <div class="w-md-80 w-lg-70 text-center mx-md-auto mb-9">
                <h1 class="display-4 font-size-md-down-5 text-white hero-title">
                    <strong class="font-weight-semi-bold">7 raisons d'investir</strong>
                    <br>
                    <span class="sub-title">
                        dans un fond de private equity <strong>Equinox</strong>
                    </span>
                </h1>
            </div>
            <!-- End Title -->

        </div>

        <!-- SVG Bottom Shape -->
        <figure class="position-absolute right-0 bottom-0 left-0">
            <img class="js-svg-injector" src="../../assets/svg/components/irregular-shape-1-bottom.svg"
                 alt="Image Description"
                 data-parent="#SVGheroBottomShape">
        </figure>
        <!-- End SVG Bottom Shape -->

        <div class="card-container pb-4">
            <div class="card card-reason mt-3 mx-2 border-0 shadow-sm" v-for="(reason, index) in reasons"
                 :key="reason.title">
                <div class="card-body text-center">
                    <p class="title">
                        {{reason.title}}
                    </p>
                </div>

                <div class="index-bg">
                    0{{index + 1}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Hero',
        props: {},
        data() {
            return {
                reasons: [
                    {
                        title: "Une espérance de rendement optimale"
                    },
                    {
                        title: "Des risques faibles et maîtrisés"
                    },
                    {
                        title: "Une sélection des meilleurs fonds mondiaux"
                    },
                    {
                        title: "La confiance de grands noms de la gestion de fortune"
                    },
                    {
                        title: "Le soutien d’investisseurs de premier plan"
                    },
                    {
                        title: "Financer l’économie réelle"
                    },
                    {
                        title: "Investir facilement et en toute transparence"
                    }
                ]
            }
        }
    };
</script>

<style scoped lang="scss">
    #hero-home {
        padding-top: 74px;

        &.gradient-half-purple-v5 {
            background-image: linear-gradient(150deg, $purple-darker 0%, $purple 100%);
            background-repeat: repeat-x;
        }

        .hero-title {
            font-weight: 700;
            @extend .poppins;

            .sub-title {
                color: $gray-900;
                font-weight: 500;

                strong {
                    font-weight: 700;
                }
            }
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .card-reason {
                width: 300px;

                .card-body {
                    z-index: 1;
                    position: relative;
                    height: 180px;

                    .title {
                        font-weight: 700;
                        font-size: 20px;
                        color: $gray-900;
                        padding-top: 45px;
                    }
                }

                .index-bg {
                    z-index: 0;
                    position: absolute;
                    text-align: center;
                    font-size: 160px;
                    left: 0px;
                    top: -25px;
                    right: 0px;
                    bottom: 0px;
                    font-weight: 700;

                    color: rgba($blue, 0.1);
                }
            }
        }
    }
</style>
