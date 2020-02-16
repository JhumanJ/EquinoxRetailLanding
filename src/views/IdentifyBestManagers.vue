<template>
    <div id="rate-best-managers">
        <div class="content">
            <div class="container pt-8 pb-5">
                <BestManagersPageHeader header-text="Identifier les meilleurs gérants en levée de fonds">
                    <p class="text-center font-size-20 text-color-dark font-weight-medium">
                        Un processus rigoureux permet de sélectionner les 10 fonds les plus prometteurs parmi les
                        quelques 3700 fonds en levée tous les ans dans le monde.
                    </p>
                </BestManagersPageHeader>
                <div id="filters" class="row my-10">
                    <div class="col d-flex align-items-center">
                        <div class="card shadow-sm" id="filters-card">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <span class="fa-stack ml-2" v-on:click="decreaseCounter">
                                    <i class="fas fa-stack-2x fa-circle" :class="circleClass(selectedFilter === 1)"></i>
                                    <i class="fas fa-stack-1x fa-arrow-left" :class="arrowClass(selectedFilter === 1)"></i>
                                </span>
                                <span class="font-weight-bold font-size-18">Filtre {{ selectedFilter }}</span>
                                <span class="fa-stack mr-2" v-on:click="increaseCounter">
                                    <i class="fas fa-stack-2x fa-circle" :class="circleClass(selectedFilter === 5)"></i>
                                    <i class="fas fa-stack-1x fa-arrow-right" :class="arrowClass(selectedFilter === 5)"></i>
                                </span>
                            </div>
                            <div class="card-body d-flex flex-column justify-content-end">
                                <div class="flex-grow-1">
                                    <div cl :class="{'d-none': selectedFilter !== 1}">
                                        Sélection des fonds ayant des tailles, des géographies et des stratégies adaptés
                                        au cahier des charges d’Equinox.
                                    </div>
                                    <div :class="{'d-none': selectedFilter !== 2}">
                                        Fonds ayant a minima 5 sur 10 sur chacun des critères de la scorecard d’Equinox.
                                    </div>
                                    <div :class="{'d-none': selectedFilter !== 3}">
                                        Fonds sur lesquels Equinox engage une diligence plus ou moins poussée.
                                    </div>
                                    <div :class="{'d-none': selectedFilter !== 4}">
                                        Fonds validés par le comité d’investissement d’Equinox.
                                    </div>
                                    <div :class="{'d-none': selectedFilter !== 5}">
                                        Fonds validés par le comité stratégique d’Equinox.
                                    </div>
                                </div>

                                <div class="row mt-5" :class="{'d-none': selectedFilter !== 1}">
                                    <i class="fas fa-long-arrow-alt-right text-color-primary arrow-filters font-size-18"></i>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">3700</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>INITIAUX</span>
                                    </div>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">1000-1500</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>RESTANTS</span>
                                    </div>
                                </div>

                                <div class="row mt-5" :class="{'d-none': selectedFilter !== 2}">
                                    <i class="fas fa-long-arrow-alt-right text-color-primary arrow-filters"></i>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">1000-1500</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>INITIAUX</span>
                                    </div>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">400-500</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>RESTANTS</span>
                                    </div>
                                </div>

                                <div class="row mt-5" :class="{'d-none': selectedFilter !== 3}">
                                    <i class="fas fa-long-arrow-alt-right text-color-primary arrow-filters"></i>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">400-500</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>INITIAUX</span>
                                    </div>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">100</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>RESTANTS</span>
                                    </div>
                                </div>

                                <div class="row mt-5" :class="{'d-none': selectedFilter !== 4}">
                                    <i class="fas fa-long-arrow-alt-right text-color-primary arrow-filters"></i>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">100</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>INITIAUX</span>
                                    </div>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">20-30</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>RESTANTS</span>
                                    </div>
                                </div>

                                <div class="row mt-5" :class="{'d-none': selectedFilter !== 5}">
                                    <i class="fas fa-long-arrow-alt-right text-color-primary arrow-filters"></i>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">20-30</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">FONDS<br>INITIAUX</span>
                                    </div>
                                    <div class="col font-weight-semi-bold">
                                        <span class="font-size-18 text-color-primary">10</span>
                                        <br>
                                        <span class="text-color-gray font-size-14">MEILLEURS<br>FONDS</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <FilterBubble id="filter-bubble-1" :enabled="selectedFilter === 1" :filter-number="1"
                                      v-on:clicked="selectedFilter = 1"
                                      class="z-index-4"/>
                        <FilterBubble id="filter-bubble-2" :enabled="selectedFilter === 2" :filter-number="2"
                                      v-on:clicked="selectedFilter = 2"
                                      class="z-index-4"/>
                        <FilterBubble id="filter-bubble-3" :enabled="selectedFilter === 3" :filter-number="3"
                                      v-on:clicked="selectedFilter = 3"
                                      class="z-index-4"/>
                        <FilterBubble id="filter-bubble-4" :enabled="selectedFilter === 4" :filter-number="4"
                                      v-on:clicked="selectedFilter = 4"
                                      class="z-index-4"/>
                        <FilterBubble id="filter-bubble-5" :enabled="selectedFilter === 5" :filter-number="5"
                                      v-on:clicked="selectedFilter = 5"
                                      class="z-index-4"/>
                        <div class="row flex-nowrap">
                            <div class="col-2 d-flex align-items-end">
                                <img class="filter-image" src="../assets/svg/equinox/filter-1.svg" alt="Filter 1">
                            </div>
                            <div class="col-2 d-flex align-items-end">
                                <img class="filter-image" src="../assets/svg/equinox/filter-2.svg" alt="Filter 2">
                            </div>
                            <div class="col-2 d-flex align-items-end">
                                <img class="filter-image" src="../assets/svg/equinox/filter-3.svg" alt="Filter 3">
                            </div>
                            <div class="col-2 d-flex align-items-end">
                                <img class="filter-image" src="../assets/svg/equinox/filter-4.svg" alt="Filter 4">
                            </div>
                            <div class="col-2 d-flex align-items-end">
                                <img class="filter-image" src="../assets/svg/equinox/filter-5.svg" alt="Filter 5">
                            </div>
                            <div class="col-3 d-flex align-items-end">
                                <img class="filter-image" src="../assets/svg/equinox/filter-6.svg" alt="Filter 6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BestManagersPageHeader from '../components/shared/BestManagersPageHeader'
    import FilterBubble from '../components/FilterBubble'

    export default {
        name: "IdentifyBestManagers",
        components: {FilterBubble, BestManagersPageHeader},
        data() {
            return {
                selectedFilter: 1
            }
        },
        computed: {},
        methods: {
            increaseCounter() {
                this.selectedFilter = this.selectedFilter < 5 ? this.selectedFilter + 1 : this.selectedFilter
            },
            decreaseCounter() {
                this.selectedFilter = this.selectedFilter > 1 ? this.selectedFilter - 1 : this.selectedFilter
            },
            circleClass($disabled = true) {
                return $disabled ? "text-color-primary-darker" : "text-color-white"
            },
            arrowClass($disabled = true) {
                return $disabled ? "text-color-gray" : "text-color-primary"
            }
        }
    }
</script>

<style scoped lang="scss">
    #filters-card {
        height: 322px;

        .card-header {
            background-color: $primary;
            color: $white;
        }

        .arrow-filters {
            position: absolute;
            top: 235px;
            left: 110px;
        }
    }

    .fa-stack {
        cursor: pointer;
    }

    .filter-image {
        width: 100%;
    }

    #filter-bubble-1 {
        position: absolute;
        left: 112px;
    }

    #filter-bubble-2 {
        position: absolute;
        left: 255px;
        top: 28px;
    }

    #filter-bubble-3 {
        position: absolute;
        left: 398px;
        top: 54px;
    }

    #filter-bubble-4 {
        position: absolute;
        left: 540px;
        top: 80px;
    }

    #filter-bubble-5 {
        position: absolute;
        left: 684px;
        top: 118px;
    }
</style>
