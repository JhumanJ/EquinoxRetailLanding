<template>
    <div id="hero-home" class="position-relative gradient z-index-2 overflow-hidden mt-10">
        <div class="container mt-6">
            <!-- Title -->
            <div class="w-md-100 text-center mx-md-auto">
                <h1 class="display-4 font-size-md-down-5 text-white hero-title">
                    <strong class="font-weight-semi-bold">9 raisons d'investir</strong>
                    <br>
                    <span class="font-weight-medium">
                        dans un fond de private equity <u>Equinox</u>
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

        <div class="card-container mt-6 pb-5">
            <a href="#" v-scroll-to="reason.target" class="card card-reason mx-2 my-2 border-0 shadow-sm"
               v-for="(reason, index) in reasons"
               :key="reason.title">
                <div class="card-body d-flex align-items-center">
                    <span class="font-size-20 font-weight-bolder text-color-dark text-center">{{reason.title}}</span>
                </div>

                <div class="index-bg">
                    0{{index + 1}}
                </div>
            </a>
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
                        title: "Une espérance de rendement exceptionnelle",
                        target: "#roi-block"
                    },
                    {
                        title: "Des risques faibles et maîtrisés",
                        target: "#risks-block"
                    },
                    {
                        title: "Une équipe d'investissement chevronné",
                        target: "#team-block"
                    },
                    {
                        title: "Une sélection des meilleurs fonds mondiaux",
                        target: "#selection-block"
                    },
                    {
                        title: "Financer les plus belles sociétés ",
                        target: "#invest-block"
                    },
                    {
                        title: "Un investissement responsable",
                        target: "#responsibility-block"
                    },
                    {
                        title: "Investir facilement et en toute transparence",
                        target: "#transparency-block"
                    },
                    {
                        title: "La confiance des plus grands noms de la gestion de fortune",
                        target: "#trust-block"
                    },
                    {
                        title: "Le soutien d’investisseurs de premier plan",
                        target: "#support-block"
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #hero-home {
        padding-top: 74px;

        &.gradient {
            background-image: linear-gradient(150deg, $primary 50%, $primary-lighter 100%);
            background-repeat: repeat-x;
        }

        .hero-title {
            font-size: 40px;
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .card-reason {
                height: 165px;
                width: 240px;

                .card-body {
                    z-index: 1;
                    position: relative;
                }

                .index-bg {
                    z-index: 0;
                    position: absolute;
                    text-align: center;
                    font-size: 160px;
                    left: 0px;
                    top: -35px;
                    right: 0px;
                    bottom: 0px;
                    font-weight: 700;

                    color: rgba($primary, 0.1);
                }
            }
        }
    }
</style>
