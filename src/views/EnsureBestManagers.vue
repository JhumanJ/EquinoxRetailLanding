<template>
    <div id="ensure-best-managers">
        <div class="content">
            <div class="container pt-8 pb-5">
                <BestManagersPageHeader header-text="Garantir de pouvoir investir chez les meileurs gérants">
                    <p class="text-center" id="invest-text">
                        Investir dans les meilleurs fonds mondiaux de private equity n’est pas à la portée de tout
                        investisseur. C’est grâce à la taille des fonds gérés et au réseau mondial de ses équipes
                        qu’equinox peut investir chez les meilleurs gérants.
                    </p>
                </BestManagersPageHeader>
                <div id="handshake">
                    <img src="../assets/svg/equinox/handshake.svg" alt="Equinox handshake"/>
                </div>
                <div id="description">
                    <div class="row mt-4">
                        <span class="headline-text mb-2">Taille minimum pour investir chez les meilleurs gérants</span>
                        <p class="explanation-text">
                            Le ticket d’entrée pour investir en private equity est souvent au minimum de 10 millions
                            d’euros, voire de 40 millions d’euros chez les tous meilleurs gérants mondiaux.
                            <br>
                            Equinox dispose de la taille nécessaire pour réaliser de tels investissement du fait de son
                            réseau de partenaires distributeurs et de sa capacité à agréger les demandes d’un nombre
                            important de clients.
                        </p>
                    </div>
                    <div class="row ">
                        <span class="headline-text mb-2">Relation privilégiée avec les meilleurs gérants</span>
                        <p class="explanation-text">
                            Seule une relation de longue durée autorise l’accès chez les meilleurs gérants, dont les
                            fonds sont le plus souvent sursouscrits.
                            <br>
                            La réputation des équipes equinox dans leur zone géographique respective est indiscutable
                            parmi les professionnels du secteur. Leurs relations avec les meilleurs gérants y sont
                            construites de très longue date, facilitant de facto leur capacité à entrer chez les fonds
                            les plus performants.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BestManagersPageHeader from '../components/shared/BestManagersPageHeader'

    export default {
        name: "EnsureBestManagers",
        components: {BestManagersPageHeader}
    }
</script>

<style scoped lang="scss">
    #invest-text {
        color: $dark;
        font-size: 20px;
        font-weight: 500;
    }

    #handshake {
        margin-top: 60px;
        text-align: center;

        img {
            width: 500px;
            height: 100%;
        }
    }

    #description {
        margin-top: 60px;

        .headline-text {
            color: $primary;
            font-weight: bold;
            font-size: 20px;
        }

        .explanation-text {
            color: $dark;
            font-weight: 500;
            font-size: 16px;
        }
    }
</style>
