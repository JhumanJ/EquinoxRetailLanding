<template>
    <div id="trust-block" class="home-block container-fluid py-10">
        <div class="block-number">
            08
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">La confiance de grands noms de la gestion de fortune</h2>
                        <p class="text-center font-size-18">
                            Equinox bénéficie déjà de la confiance d’acteurs majeurs du secteur de la banque privée en
                            Europe disposés à distribuer ses fonds millésimés.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-8 row">
                <div class="col-4 d-flex flex-wrap justify-content-between align-items-center">
                    <div class="anchor">
                        <img class="bank-image" :class="{selected: selectedBank === 1}"
                             v-on:click="selectedBank = 1"
                             src="../../../assets/png/soc-gen.png" alt="Société Générale"/>
                    </div>
                    <div class="anchor">
                        <img class="bank-image" :class="{selected: selectedBank === 2}"
                             v-on:click="selectedBank = 2"
                             src="../../../assets/png/lazard.png" alt="Lazard"/>
                    </div>
                    <div class="anchor">
                        <img class="bank-image" :class="{selected: selectedBank === 3}"
                             v-on:click="selectedBank = 3"
                             src="../../../assets/png/blackrock.png" alt="Blackrock"/>
                    </div>
                    <div class="anchor">
                        <img class="bank-image" :class="{selected: selectedBank === 4}"
                             v-on:click="selectedBank = 4"
                             src="../../../assets/png/amundi.png" alt="Amundi"/>
                    </div>
                </div>
                <div class="col-8">
                    <div class="card">
                        <div class="card-body shadow-sm font-size-18 font-italic text-color-dark px-6 py-5">
                            <div :class="{'d-none': selectedBank !== 1}">
                                <p>
                                    Nous nous sommes associés à <span class="text-color-primary">Equinox</span> pour
                                    distribuer leurs produits pour plusieurs raisons
                                    :
                                </p>
                                <p>
                                    1. Nous pensons que l’investissement en private equity est très opportun dans la
                                    conjoncture
                                    actuelle de taux zéro.
                                </p>
                                <p>
                                    2. Nous souhaitions apporter à nos clients une offre de private equity de premier
                                    plan.
                                </p>
                                <p>
                                    3. Leur connaissance du marché international du private equity est reconnue.
                                </p>
                                <p>
                                    4. Leur ambition digitale correspond à ce que nous recherchions pour nos clients.
                                </p>
                            </div>
                            <div :class="{'d-none': selectedBank !== 2}">
                                <p>
                                    Nous nous sommes associés à <span class="text-color-primary">Equinox</span> pour
                                    distribuer leurs produits pour plusieurs raisons
                                    :
                                </p>
                                <p>
                                    1. Nous pensons que l’investissement en private equity est très opportun dans la
                                    conjoncture
                                    actuelle de taux zéro.
                                </p>
                                <p>
                                    2. Nous souhaitions apporter à nos clients une offre de private equity de premier
                                    plan.
                                </p>
                                <p>
                                    3. Leur connaissance du marché international du private equity est reconnue.
                                </p>
                                <p>
                                    4. Leur ambition digitale correspond à ce que nous recherchions pour nos clients.
                                </p>
                            </div>
                            <div :class="{'d-none': selectedBank !== 3}">
                                <p>
                                    Nous nous sommes associés à <span class="text-color-primary">Equinox</span> pour
                                    distribuer leurs produits pour plusieurs raisons
                                    :
                                </p>
                                <p>
                                    1. Nous pensons que l’investissement en private equity est très opportun dans la
                                    conjoncture
                                    actuelle de taux zéro.
                                </p>
                                <p>
                                    2. Nous souhaitions apporter à nos clients une offre de private equity de premier
                                    plan.
                                </p>
                                <p>
                                    3. Leur connaissance du marché international du private equity est reconnue.
                                </p>
                                <p>
                                    4. Leur ambition digitale correspond à ce que nous recherchions pour nos clients.
                                </p>
                            </div>
                            <div :class="{'d-none': selectedBank !== 4}">
                                <p>
                                    Nous nous sommes associés à <span class="text-color-primary">Equinox</span> pour
                                    distribuer leurs produits pour plusieurs raisons
                                    :
                                </p>
                                <p>
                                    1. Nous pensons que l’investissement en private equity est très opportun dans la
                                    conjoncture
                                    actuelle de taux zéro.
                                </p>
                                <p>
                                    2. Nous souhaitions apporter à nos clients une offre de private equity de premier
                                    plan.
                                </p>
                                <p>
                                    3. Leur connaissance du marché international du private equity est reconnue.
                                </p>
                                <p>
                                    4. Leur ambition digitale correspond à ce que nous recherchions pour nos clients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p class="text-right mt-3 mr-2 text-color-dark font-weight-semi-bold">{{bankNames[selectedBank -
                        1]}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrustBlock",
        data() {
            return {
                selectedBank: 1,
                bankNames: [
                    'Société Générale',
                    'Lazard',
                    'Blackrock',
                    'Amundi'
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-body {
        p {
            margin-bottom: .25rem;
        }
    }

    .bank-image {
        cursor: pointer;
        width: 150px;
        height: 150px;
        transition: all .5s ease-in-out;
    }

    .bank-image.selected {
        transform: scale(1.5);
    }

    .anchor {
        position: relative;

        i {
            position: absolute;
            top: 160px;
            left: 70px;
        }
    }
</style>
