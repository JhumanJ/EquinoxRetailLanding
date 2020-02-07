<template>
    <div id="best-managers">

        <div class="content container-fluid">
            <div class="container pt-8 pb-5">
                <div class="tag text-center">
                    <button class="btn btn-soft-success btn-pill my-4">
                        Découvrir
                    </button>
                </div>
                <h2 class="text-center">Identifier les meilleurs gérants</h2>
                <p class="text-center">
                    Identifier les meilleurs gérants de demain à l'échelle mondiale est un travail long et complexe. Equinox a défini un scoring de 12 critères objectifs pour sa sélection de gérants, dont l’appréciation requiert une connaissance intime du marché du private equity.
                </p>
                <img style="width: 100%" src="../assets/svg/equinox/equinox-managers.svg"/>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
    </div>
</template>

<script>

    import Subscribe from '@/components/Home/Subscribe.vue';
    import Footer from '@/components/Home/Footer.vue';

    export default {
        name: 'best-managers',
        components: {
            Subscribe,
            Footer
        },
    };
</script>

<style scoped lang="scss">
    #best-managers {

        .content {
            background-color: $gray-200;
        }
    }
</style>

