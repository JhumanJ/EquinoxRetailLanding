<template>
    <div id="rate-best-managers">
        <div class="content">
            <div class="container pt-8 pb-5">
                <BestManagersPageHeader header-text="Noter les gérants">
                    <p class="text-center" id="identify-text">
                        Identifier les meilleurs gérants de demain à l'échelle mondiale est un travail long et complexe.
                    </p>
                    <p class="text-center" id="scoring-text">
                        Equinox a défini un scoring (de 1 à 10) sur 12 critères objectifs pour sa sélection de gérants, dont
                        l’appréciation requiert une connaissance intime du marché du private equity.</p>
                </BestManagersPageHeader>
                <div id="criteria" class="my-10 d-flex justify-content-center align-items-middle">
                    <img class="w-75" src="../assets/svg/equinox/equinox-manager-criteria.svg" alt="Equinox manager criteria"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BestManagersPageHeader from '../components/shared/BestManagersPageHeader'

    export default {
        name: 'RateBestManagers',
        components: {
            BestManagersPageHeader
        }
    }
</script>

<style scoped lang="scss">
    #criteria {
        margin-top: 60px;
    }

    p {
        font-size: 20px;
    }

    #identify-text {
        font-weight: normal;
    }

    #scoring-text {
        color: $dark;
        font-weight: 600;
    }
</style>

