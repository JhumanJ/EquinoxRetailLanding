<template>
    <div id="team-block" class="home-block home-block-alt container-fluid py-10">
        <div class="block-number block-number-alt">
            03
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Une équipe d'investissement chevronnée</h2>
                        <p class="text-center font-size-18 text-color-primary">
                            Les équipes de sélection de fonds Equinox sont constituées de professionnels disposant
                            chacun de plus de 15 années d’expérience dans le private equity, et d’une connaissance
                            intime du fonctionnement de chaque marché.
                        </p>
                        <p class="text-center font-size-18">
                            Elles couvrent les États-Unis, l’Europe et l’Asie, et sont présentes sur chaque continent
                            afin d'être proches des meilleurs gérants.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mt-md-5">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <div class="row">
                            <div class="col text-center" v-for="person of teamMembers">
                                <img class="u-xl-avatar rounded-circle mb-2" :src="`img/landing/${person.imgPath}`"/>
                                <h5 class="text-color-gray">{{ person.name }}</h5>
                                <div class="text-color-dark person-title">{{ person.title }}</div>
                                <div class="btn btn-pill btn-outline-primary px-5">
                                    {{ person.experience }} ans d'expérience <br> dans le private equity
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <ToKnowMore title="À propos d'Equinox" :elements="knowMore"></ToKnowMore>
            </div>
        </div>
    </div>
</template>

<script>
    import ToKnowMore from '../../shared/ToKnowMore'

    export default {
        name: "TeamBlock",
        components: {ToKnowMore},
        data() {
            return {
                teamMembers: [
                    {
                        imgPath: "stolar.png",
                        name: "Frédéric Stolar",
                        title: "Fondateur et Ex-Directeur Général de Sagard",
                        experience: 28
                    },
                    {
                        imgPath: "person.png",
                        name: "M. X",
                        title: "Expérience M. X",
                        experience: 15
                    },
                    {
                        imgPath: "person.png",
                        name: "Mme Y",
                        title: "Expérience Mme Y",
                        experience: 17
                    }
                ],
                knowMore: [
                    {
                        link: "",
                        name: "L'équipe d'Equinox"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .person-title {
        height: 60px;
        vertical-align: center;
    }

    .btn-pill {
        border-width: 2px;
    }
</style>
