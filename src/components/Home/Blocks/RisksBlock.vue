<template>
    <div id="risks-block" class="home-block container-fluid py-10">
        <div class="block-number">
            02
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Un niveau de risque faible</h2>
                        <p class="text-center text-color-primary font-size-18">
                            Diversifier, règle d’or de l’investissement, est aussi une exigence en private equity
                        </p>
                        <p class="text-center font-size-18">
                            Equinox construit tous les ans un portefeuille millésimé constitué des meilleurs gérants
                            mondiaux de private equity afin d’offrir une diversification très aboutie.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row" id="risks-diversify">
                <div class="col-12">
                    <h4 class="text-center font-size-22 font-weight-bold mb-4">Les clés de la diversification</h4>
                    <div class="row justify-content-center">
                        <div class="col text-center" v-for="(elem, key) in diversifications">
                            <button type="button"
                                    class="btn btn-outline btn-soft-primary font-weight-semi-bold font-size-22 w-100"
                                    :class="{active: selectedDiversification === key}"
                                    @click="selectedDiversification = key">
                                {{ elem.title }}
                            </button>
                        </div>
                    </div>
                    <div class="row justify-content-center mt-5">
                        <div class="col-8 text-center font-size-20" v-html="diversifications[selectedDiversification]['description']"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RisksBlock',
        data() {
            return {
                selectedDiversification: "managers",
                diversifications:
                    {
                        managers: {
                            title: "Gérants",
                            description: "Afin de pallier le risque de sous-performance d'un gérant, " +
                                "<span class='text-color-primary'>Equinox</span> investit chaque année dans un portefeuille constitué des dix meilleurs gérants mondiaux."
                        },
                        strategies: {
                            title: "Stratégies",
                            description: "Afin de pallier le risque de concurrence affectant certains segments du marché du private equity, " +
                                "<span class='text-color-primary'>Equinox</span> investit dans des gérants ayant différents types de stratégie (small cap, mid cap, large cap, sectoriels, etc.)."
                        }
                        ,
                        geographies: {
                            title: "Geographies",
                            description: "Afin de pallier les risques macro-économiques pouvant affecter une zone géographique spécifique, " +
                                "<span class='text-color-primary'>Equinox</span> se constitue chaque année un portefeuille de gérants bien répartis entre les États-Unis, l’Europe et l’Asie."
                        },
                        millesimes: {
                            title: "Millésimes",
                            description: "Afin de pallier les risques liés aux cycles macro-économiques, " +
                                "<span class='text-color-primary'>Equinox</span> crée chaque année un fonds millésimé dédié où elle met en œuvre sa stratégie de gestion discrétionnaire."
                        }
                    }
            }
        }
    }
</script>

<style scoped lang="scss">
    #risks-diversify {
        margin-top: 40px;
    }
</style>
