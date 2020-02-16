<template>
    <div id="equinox-navbar">
        <b-navbar :variant="backgroundVariant" type="light" fixed="top">
            <b-navbar-brand to="/">
                <img src="../../assets/svg/equinox/equinox.svg" class="d-inline-block align-middle" alt="Equinox">
                <span id="equinox-name" class="ml-2 align-middle font-weight-bold"
                      :class="textColorEquinox">Equinox</span>
            </b-navbar-brand>

            <div class="ml-auto">
                <b-navbar-nav>
                    <b-nav-item-dropdown no-caret toggle-class="mx-5" boundary="window" left>
                        <template v-slot:button-content>
                        <span class="font-size-20 font-weight-medium align-middle" :class="textColor">
                            Découvrir <i class="fas fa-caret-down"></i>
                        </span>
                        </template>
                        <div class="py-2 container justify-content-center">
                            <div class="row">

                                <div class="col-4 mb-2">
                                    <b-dropdown-group id="dropdown-group-private-equity" header="Private equity">
                                        <b-dropdown-item>Définition</b-dropdown-item>
                                        <b-dropdown-item>Performances historiques</b-dropdown-item>
                                        <b-dropdown-item>Pourquoi de telles performances ?</b-dropdown-item>
                                        <b-dropdown-item>Risques</b-dropdown-item>
                                        <b-dropdown-item>
                                            Différentes stratégies d'investissement des gérants
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            Comment le particulier peut-il investir en private equity ?
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            Combien investir en private equity ?
                                        </b-dropdown-item>
                                        <b-dropdown-item>Fiscalité</b-dropdown-item>
                                        <b-dropdown-item>Cash-flows</b-dropdown-item>
                                        <b-dropdown-item>Liquidité</b-dropdown-item>
                                        <b-dropdown-item>Notre vision du marché</b-dropdown-item>
                                    </b-dropdown-group>
                                </div>

                                <div class="col-4 mb-2">
                                    <b-dropdown-group id="dropdown-group-innovation"
                                                      header="L'approche innovante d'Equinox">
                                        <b-dropdown-item>Le private equity 100% digital</b-dropdown-item>
                                        <b-dropdown-item>Le private equity disponible à partir de 10.000 euros
                                        </b-dropdown-item>
                                        <b-dropdown-item>Une approche unique sur la diversification</b-dropdown-item>
                                        <b-dropdown-item>
                                            Une approche très approuvée de construction de portefeuille
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            Éligibilité à l'assurance vie française et luxembourgeoise
                                        </b-dropdown-item>
                                        <b-dropdown-item>News channel Equinox</b-dropdown-item>
                                    </b-dropdown-group>
                                </div>

                                <div class="col-4 mb-2">
                                    <b-dropdown-group id="dropdown-group-a-propos"
                                                      header="À propos d'Equinox">
                                        <b-dropdown-item>Qui sommes-nous ?</b-dropdown-item>
                                        <b-dropdown-item>L'Équipe Equinox</b-dropdown-item>
                                        <b-dropdown-item>Nos investisseurs</b-dropdown-item>
                                        <b-dropdown-item>
                                            Notre advisory board
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            Notre conseil d'administration
                                        </b-dropdown-item>
                                        <b-dropdown-item>Nos partenaires</b-dropdown-item>
                                        <b-dropdown-item>Investissement responsable</b-dropdown-item>
                                        <b-dropdown-item>Conférences et évènements</b-dropdown-item>
                                        <b-dropdown-item>Equinox dans les médias</b-dropdown-item>
                                        <b-dropdown-item>Contact</b-dropdown-item>
                                    </b-dropdown-group>
                                </div>

                            </div>
                        </div>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown no-caret toggle-class="mx-5" boundary="window" left offset="60">
                        <template v-slot:button-content>
                        <span class="font-size-20 font-weight-medium align-middle" :class="textColor">
                            Investir <i class="fas fa-caret-down"></i>
                        </span>
                        </template>
                        <div class="container">
                            <div class="row">

                                <div class="col-4 mb-2">
                                    <b-dropdown-group id="dropdown-group-subscribe" header="Comment souscrire ?">
                                        <b-dropdown-item>Qui peut souscrire ?</b-dropdown-item>
                                        <b-dropdown-item>Combien souscrire ?</b-dropdown-item>
                                        <b-dropdown-item>En direct ou par l'assurance vie ?</b-dropdown-item>
                                        <b-dropdown-item>La procédure de souscription</b-dropdown-item>
                                    </b-dropdown-group>
                                </div>

                                <div class="col-4 mb-2">
                                    <b-dropdown-group id="dropdown-group-simulators"
                                                      header="Simulateurs">
                                        <b-dropdown-item>Simulateur de millésime standard</b-dropdown-item>
                                        <b-dropdown-item>Simulateur: engagement vs. cash-flow
                                        </b-dropdown-item>
                                        <b-dropdown-item>Simulateur de portefeuille</b-dropdown-item>
                                        <b-dropdown-item>Autres outils</b-dropdown-item>
                                    </b-dropdown-group>
                                </div>

                                <div class="col-4 mb-2">
                                    <b-dropdown-group id="dropdown-group-follow"
                                                      header="Suivre les investissements">
                                        <b-dropdown-item>Reporting consolidé</b-dropdown-item>
                                        <b-dropdown-item>Valorisations trimestrielles</b-dropdown-item>
                                        <b-dropdown-item>Intégrations au reporting bancaire</b-dropdown-item>
                                        <b-dropdown-item>Service investisseurs</b-dropdown-item>
                                    </b-dropdown-group>
                                </div>

                                <div class="col-4 mb-2">
                                    <b-dropdown-group id="dropdown-group-fiscal"
                                                      header="Fiscalité">
                                        <b-dropdown-item>Structure juridique des fonds Equinox</b-dropdown-item>
                                        <b-dropdown-item>Fiscalité</b-dropdown-item>
                                    </b-dropdown-group>
                                </div>

                            </div>
                        </div>
                    </b-nav-item-dropdown>
                    <b-button class="px-6 py-2 font-size-20" size="md" :variant="subscribeButtonVariant" v-scroll-to="'#subscribe'">
                        Souscrire
                    </b-button>
                </b-navbar-nav>
            </div>

        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            initializedInWhite: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                hasScrolled: this.initializedInWhite,
                lastScrollPosition: 0
            }
        },
        computed: {
            backgroundVariant() {
                return this.hasScrolled ? "light" : "navbar-bg-transparent"
            },
            subscribeButtonVariant() {
                return this.hasScrolled ? "primary" : "white"
            },
            textColor() {
                return this.hasScrolled ? "text-color-dark" : "text-color-white"
            },
            textColorEquinox() {
                return this.hasScrolled ? "text-color-dark" : "text-color-white"
            }
        },
        mounted() {
            if (!this.initializedInWhite) {
                window.addEventListener('scroll', this.onScroll)
            }
        },
        methods: {
            onScroll() {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

                this.hasScrolled = currentScrollPosition >= 10

                this.lastScrollPosition = currentScrollPosition
            }
        }
    }
</script>

<style lang="scss">
    #equinox-navbar {
        #equinox-name {
            font-size: 32px;
        }

        .bg-light {
            background-color: $white !important;
        }

        .bg-primary {
            background-color: transparent !important;
        }

        .navbar-brand {
            img {
                height: 42px;
                width: 42px;
            }

            span {
                font-size: 36px;
            }
        }

        .dropdown.show {
            span.font-weight-medium {
                font-weight: 700 !important;
            }
        }

        .dropdown-menu {
            width: 992px;

            .dropdown-header {
                color: $dark;
                font-weight: bold;
                font-size: 16px;
                padding: .375em 14px;
            }

            .dropdown-item {
                font-size: 14px;
                white-space: normal;
                padding: 0.375em 14px;
            }
        }
    }
</style>
