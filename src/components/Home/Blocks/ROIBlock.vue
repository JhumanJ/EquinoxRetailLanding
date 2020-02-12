<template>
    <div id="roi-block" class="home-block home-block-alt container-fluid py-10">
        <div class="block-number block-number-alt">
            01
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Une espérance de rendement exceptionnelle</h2>
                        <p class="text-center font-size-18">
                            Les fonds de private equity Equinox offrent aux investisseurs individuels les meilleures
                            espérances de rendement sur le long terme.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="comparison row align-items-center my-3 justify-content-center">
                        <div class="mb-7 mb-sm-0">
                            <RoICard title="Fonds Euros"
                                     percentage="0,5-0,7%"
                                     back-text="Un euro investi au taux de 0,5% sur 10 ans rapporte 1,05x la mise"/>
                        </div>

                        <div class="card-vs font-size-22 font-weight-bold">
                            VS
                        </div>

                        <div class="">
                            <RoICard title="Fonds Equinox"
                                     multiplier="18x"
                                     percentage="10-12%"
                                     back-text="Un euro investi au taux de 12% sur 10 ans rapporte 3,1x la mise"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <ToKnowMore title="Private Equity" :elements="knowMore"/>
            </div>
        </div>
    </div>
</template>


<script>
    import ToKnowMore from '../../shared/ToKnowMore'
    import RoICard from './components/RoICard'

    export default {
        name: 'RoIBlock',
        components: {
            RoICard,
            ToKnowMore
        },
        data() {
            return {
                knowMore: [
                    {
                        link: "",
                        name: "Performances historiques"
                    },
                    {
                        link: "",
                        name: "Pourquoi de telles performances"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    #roi-block {
        .card-vs {
            padding: 16px;
            margin: 20px;
            width: 60px;
            height: 60px;
            background-color: $primary;
            border-radius: 60px;
            color: $white;
        }
    }
</style>
