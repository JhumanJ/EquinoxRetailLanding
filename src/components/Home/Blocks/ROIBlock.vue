<template>
    <div id="roi-block" class="home-block container-fluid py-10 py-4">
        <div class="block-number">
            01
        </div>
        <div class="row">
            <div class="container">

                <div class="row">
                    <div class="col-12">
                        <!-- Title -->
                        <div class="pr-lg-4 mb-5">
                            <h2 class="text-center">Une espérance de rendement optimale</h2>
                            <p class="text-center">
                                Les fonds de private equity Equinox offrent aux investisseurs individuels de loin les meilleures
                                espérances de rendement sur le long terme.
                            </p>
                        </div>
                        <!-- End Title -->
                    </div>

                    <div class="col-12">
                        <div class="comparison row align-items-center my-3 justify-content-center">
                            <div class="mb-7 mb-sm-0">
                                <ROICard title="Fonds Euros" Percentage="0,5-0,7%"></ROICard>
                            </div>

                            <div class="card-vs">
                                VS
                            </div>

                            <div class="">
                                <ROICard title="Fonds Equinox"
                                         Multiplier="18x"
                                         Percentage="10-12%"></ROICard>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 my-4 tags">
                        <div>
                            <button class="btn mx-2 mt-2 btn-pill btn-outline-success">
                                Private Equity
                            </button>
                            <button class="btn mx-2 mt-2 btn-pill btn-soft-success">
                                Pourquoi de telles performances
                            </button>
                            <button class="btn mx-2 mt-2 btn-pill btn-soft-success">
                                Private Equity
                            </button>
                        </div>
                        <div class="mt-3">
                            <button class="btn mx-2 mt-2 btn-pill btn-outline-success">
                                L’approche innovate d’Equinox
                            </button>
                            <button class="btn mx-2 mt-2 btn-pill btn-soft-success">
                                Les leviers de la surperformance
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
        name: 'RoiBlock',
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
    #roi-block {
        position: relative;

        .block-number {
            font-size: 50rem;
            font-weight: 600;
            position: absolute;
            right: 0px;
            bottom: 0px;
            height: 100%;
            color: $gray-200;
            left: 0px;
            top: 0px;
            line-height: 50rem;
            text-align: right;
            z-index: -1;

            @include media-breakpoint-down(xs) {
                font-size: 30rem;
                font-size: 30rem;
            }
        }

        @include media-breakpoint-down(md) {
            .comparison {
                flex-direction: column;
            }
        }

        .card-vs {
            padding: 16px;
            margin: 20px;
            width: 60px;
            height: 60px;
            background-color: $purple-darker;
            border-radius: 60px;
            font-size: 22px;
            font-weight: 600;
            color: white;
        }

        .bg-purple {
            background-color: $purple;
        }

        .wave-bottom-1-0 {
            clip-path: url(#waveBottom1ID2);
            fill: #FFFFFF;
        }

        .wave-bottom-1-1 {
            clip-path: url(#waveBottom1ID2);
            fill: #FFFFFF;
            fill-opacity: 0;
        }

        .wave-bottom-1-2 {
            clip-path: url(#waveBottom1ID2);
            fill: #FFFFFF;
        }
    }
</style>
