<template>
    <div id="transparency-block" class="home-block home-block-alt container-fluid py-10">
        <div class="block-number block-number-alt">
            07
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Investir facilement et en toute transparence</h2>
                        <p class="text-center font-size-18">
                            Alors que le ticket d’entrée chez les meilleurs gérants se compte en dizaine de millions
                            d’euros, equinox permet aux investisseurs individuels d’investir chez eux en quelques clics
                            pour un ticket minimum de 20.000 euros, et de suivre leurs investissements en toute
                            transparence.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-6 row justify-content-center">
                <div class="col-6">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <p class="my-4 text-color-dark font-size-22 font-weight-bold">
                                Equinox, le private equity <span class="text-color-primary">100% digital</span>
                            </p>
                            <router-link to="" id="discover" class="btn btn-pill btn-primary">Découvrir</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 row justify-content-center">
                <div class="col-3">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <img src="../../../assets/svg/equinox/souscription.svg" alt="Computer">
                            <p class="mt-3 text-color-dark font-size-18 font-weight-medium">Souscription<br/>en ligne</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <img src="../../../assets/svg/equinox/suivi.svg" alt="Magnifying glass">
                            <p class="mt-3 text-color-dark font-size-18 font-weight-medium">Suivi trimestriel de la performance</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <img src="../../../assets/svg/equinox/reporting.svg" alt="Document">
                            <p class="mt-3 text-color-dark font-size-18 font-weight-medium">Reporting sur les société en portefeuille</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card shadow-sm">
                        <div class="card-body text-center">
                            <img src="../../../assets/svg/equinox/optimisation.svg" alt="Money">
                            <p class="mt-3 text-color-dark font-size-18 font-weight-medium">Optimisation des flux de trésorerie</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TransparencyBlock"
    }
</script>

<style scoped lang="scss">
    #discover {
        padding: ($spacer * 0.5) ($spacer * 4);
    }

    .card {
        height: 186px;
    }

</style>
