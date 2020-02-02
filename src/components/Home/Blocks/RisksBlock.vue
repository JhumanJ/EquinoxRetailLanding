<template>
    <div id="risks-block" class="home-block container-fluid pt-10 py-4">
        <div class="block-number">
            02
        </div>
        <div class="row">
            <div class="container">

                <div class="row">
                    <div class="col-12">
                        <!-- Title -->
                        <div class="pr-lg-4 mb-5">
                            <h2>Des risques faibles et maîtrisés</h2>
                            <p>
                                Investir en private equity peut être une démarche très risquée. Pas avec Equinox.
                            </p>
                        </div>
                        <!-- End Title -->
                    </div>

                    <div class="col-12 row justify-content-center align-items-center">
                        <div class="col-md-6 col-lg-5 mb-7 mb-md-0">
                            <h4>Diversifier, règle d’or de l’investissement, est aussi une exigence en private equity</h4>
                            <p>
                                À la différence de l’investissement dans un feeder, investir dans des fonds Equinox permet une diversification très aboutie, gage de risques faibles et maîtrisés.
                            </p>
                        </div>

                        <div id="SVGellipseMockup" class="col-md-6" style="">
                            <!-- SVG Mockup -->
                            <figure class="ie-ellipse-mockup">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 614.8 747.7" style="enable-background:new 0 0 614.8 747.7;" xml:space="preserve" class="injected-svg js-svg-injector" data-img-paths="[
                   {&quot;targetId&quot;: &quot;#SVGellipseMockupImg1&quot;, &quot;newPath&quot;: &quot;img/landing/eggs.jpeg&quot;}
                 ]" data-parent="#SVGellipseMockup">
                                <path class="ellipse-mockup-0 fill-primary" d="M186.9,138.9C125.8,144.5,69.7,176,34.4,226c-54.3,76.8-67.1,204.7,193.8,371.7c411.5,263.5,387.9,6,382.7-30.6  c-0.5-3.6-0.9-7.2-1.3-10.7l-22.1-241.9C576.8,198.3,474,112.7,357.7,123.3L186.9,138.9z"></path>
                                <g>
                                    <defs>
                                        <path id="SVGellipseMockupID1" d="M168.6,729.7L168.6,729.7c135.8,53,290.2-14.8,343.2-150.6l85-217.9C649.8,225.4,582,71,446.2,18l0,0    C310.4-34.9,156,32.8,103,168.6L18,386.5C-34.9,522.3,32.8,676.7,168.6,729.7z"></path>
                                    </defs>
                                    <clipPath id="SVGellipseMockupID2">
                                        <use xlink:href="#SVGellipseMockupID1" style="overflow:visible;"></use>
                                    </clipPath>
                                    <g style="clip-path:url(#SVGellipseMockupID2);">
                                        <!-- Apply your (615px width to 750px height) image here -->
                                        <image id="SVGellipseMockupImg1" style="overflow:visible;" width="615" height="750" xlink:href="img/landing/eggs.jpeg" transform="matrix(1 0 0 1 -0.1366 -0.9532)"></image>
                                    </g>
                                </g>
                                </svg>
                            </figure>
                            <!-- End SVG Mockup -->
                        </div>
                    </div>

                    <div class="col-12 my-4 tags">
                        <div>
                            <button class="btn mx-2 mt-2 btn-pill btn-outline-success">
                                Private Equity
                            </button>
                            <button class="btn mx-2 mt-2 btn-pill btn-soft-success">
                                Risques d’un investissement en private equity
                            </button>
                            <button class="btn mx-2 mt-2 btn-pill btn-soft-success">
                                Investir dans un feeder
                            </button>
                        </div>
                        <div class="mt-3">
                            <button class="btn mx-2 mt-2 btn-pill btn-outline-success">
                                L’approche innovate d’Equinox
                            </button>
                            <button class="btn mx-2 mt-2 btn-pill btn-soft-success">
                                Investir dans des portefeuilles diversifiés
                            </button>
                            <button class="btn mx-2 mt-2 btn-pill btn-soft-success">
                                Investir par millésime et pourquoi
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ROICard from '@/components/Home/Blocks/components/ROICard.vue';

    export default {
        name: 'Risks',
        components: {
            ROICard
        },
        props: {},
        data() {
            return {}
        }
    };
</script>

<style lang="scss">
    #risks-block {
        position: relative;
        background-color: $gray-200;

        .block-number {
            font-size: 50rem;
            font-weight: 600;
            position: absolute;
            right: 0px;
            bottom: 0px;
            height: 100%;
            color: white;
            left: 0px;
            top: 0px;
            line-height: 50rem;
            text-align: left;
            z-index: -1;

            @include media-breakpoint-down(xs) {
                font-size: 30rem;
                font-size: 30rem;
            }
        }

        .fill-primary {
            fill: $purple !important;
        }
    }
</style>
