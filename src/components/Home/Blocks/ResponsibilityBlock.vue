<template>
    <div id="responsibility-block" class="home-block container-fluid py-10">
        <div class="block-number">
            06
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Un investissement responsable</h2>
                        <p class="text-center font-size-18">
                            Parce qu’investir doit aussi avoir un sens citoyen, equinox s’assure que les fonds dans
                            lesquels elle investit répondent aux critères environnementaux, sociaux et de gouvernance
                            (ESG) les plus exigeants.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col d-flex justify-content-center my-6">
                    <div class="video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1SWiQ-l_RVU"></iframe>
                    </div>
                </div>
            </div>
            <div class="row">
                <ToKnowMore title="A propos d'Equinox" :elements="knowMore"></ToKnowMore>
            </div>
        </div>
    </div>
</template>


<script>
    import ToKnowMore from '../../shared/ToKnowMore'

    export default {
        name: "ResponsibilityBlock",
        components: {ToKnowMore},
        data() {
            return {
                knowMore: [
                    {
                        link: "",
                        name: "L'investissement responsable"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.video {
    height: 405px;
    width: 620px;
}
</style>
