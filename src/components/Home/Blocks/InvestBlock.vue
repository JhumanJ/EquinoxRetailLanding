<template>
    <div id="invest-block" class="home-block home-block-alt container-fluid py-10">
        <div class="block-number block-number-alt">
            05
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Investir au capital des plus belles sociétés</h2>
                        <p class="text-center font-size-18">
                            Les meilleurs fonds de private equity ne financent que les sociétés les plus performantes,
                            positionnées sur des marchés de croissance, et dirigées par des équipes de management les
                            plus aguerries.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col">
                    <div id="company-container">
                        <img src="../../../assets/png/revolut.png" id="revolut-img" class="company-img" alt="revolut"/>
                        <img src="../../../assets/png/slack.png" id="slack-img" class="company-img" alt="slack"/>
                        <img src="../../../assets/png/snapchat.png" id="snapchat-img" class="company-img" alt="snapchat"/>
                        <img src="../../../assets/png/spotify.png" id="spotify-img" class="company-img" alt="spotify"/>
                        <img src="../../../assets/png/tesla.png" id="tesla-img" class="company-img" alt="tesla"/>
                        <img src="../../../assets/png/uber.png" id="uber-img" class="company-img" alt="uber"/>
                    </div>
                </div>
                <div class="col d-flex align-items-center">
                    <span class="text-color-dark font-size-26 font-weight-semi-bold">
                        Investir dans equinox, c’est s’assurer d’être au capital de ces pépites industrielles.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InvestBlock"
    }
</script>

<style scoped lang="scss">
    #company-container {
        height: 360px;
    }

    .company-img {
        transition: all .2s ease-in-out;
    }

    .company-img:hover {
        transform: scale(1.3);
    }

    #revolut-img {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    #slack-img {
        width: 120px;
        height: 120px;
        position: absolute;
        top: 240px;
        left: 30px;
    }

    #spotify-img {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 270px;
        left: 300px;
    }

    #snapchat-img {
        width: 180px;
        height: 180px;
        position: absolute;
        top: 10px;
        left: 260px;
    }

    #tesla-img {
        width: 115px;
        height: 115px;
        position: absolute;
        top: 75px;
        left: 115px;
    }

    #uber-img {
        width: 90px;
        height: 90px;
        position: absolute;
        top: 225px;
        left: 185px;
    }

</style>
