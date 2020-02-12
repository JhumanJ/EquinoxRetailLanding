<template>
    <div id="support-block" class="home-block home-block-alt container-fluid py-10">
        <div class="block-number block-number-alt">
            09
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="px-lg-4 mb-5">
                        <h2 class="text-center">Le soutien d’investisseurs de premier plan</h2>
                        <p class="text-center font-size-18 text-color-primary">
                            Un certain nombre d’entrepreneurs que Frédéric Stolar a accompagné avec succès chez
                            Sagard sont les premiers investisseurs d’equinox.
                        </p>
                        <p class="text-center font-size-18">
                            Leur engagement est un signe fort de la pertinence d’investir dans les fonds equinox.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-8 row">
                <carousel :autoplayTimeout="5000" :perPage="3" :loop="true" paginationActiveColor="#367DFF" paginationColor="#8c98a4" :autoplay="true">
                    <slide>
                        <EntrepreneurCard
                                testimony="« J’ai connu Frédéric Stolar chez Sagard et je lui fais confiance depuis longtemps. Equinox me permet de construire des portefeuilles globaux de private equity chez les meilleurs gérants. Un luxe quand on sait que les fonds euros vont rapporter moins de 1%. »"
                                image-path="portrait-1.png"
                                name="Entrepreneur 1"
                                job="CEO d’une ETI de 300 M€ de CA"
                        />
                    </slide>
                    <slide>
                        <EntrepreneurCard
                                testimony="« Cela faisait longtemps que je cherchais à investir dans les meilleurs fonds. Or ma banque ne m’offrait qu’épisodiquement de pauvres feeders. L’approche d’Equinox est vraiment innovante et ses promesses de rendement très intéressantes. »"
                                image-path="portrait-2.png"
                                name="Entrepreneur 2"
                                job="CEO d’une ETI de 300 M€ de CA"
                        />
                    </slide>
                    <slide>
                        <EntrepreneurCard
                                testimony="« Frédéric était mon actionnaire majoritaire chez Sagard. Cette fois c’est moi qui suis rentré dans sa société de gestion. J’ai souscrit à Equinox dès ses débuts car mes produits d’épargne classique n’offraient plus de rendement du tout. »"
                                image-path="portrait-3.png"
                                name="Entrepreneur 3"
                                job="CEO d’une ETI de 300 M€ de CA"
                        />
                    </slide>
                    <slide>
                        <EntrepreneurCard
                                testimony="« J’ai connu Frédéric Stolar chez Sagard et je lui fais confiance depuis longtemps. Equinox me permet de construire des portefeuilles globaux de private equity chez les meilleurs gérants. Un luxe quand on sait que les fonds euros vont rapporter moins de 1%. »"
                                image-path="portrait-1.png"
                                name="Entrepreneur 4"
                                job="CEO d’une ETI de 300 M€ de CA"
                        />
                    </slide>
                    <slide>
                        <EntrepreneurCard
                                testimony="« Cela faisait longtemps que je cherchais à investir dans les meilleurs fonds. Or ma banque ne m’offrait qu’épisodiquement de pauvres feeders. L’approche d’Equinox est vraiment innovante et ses promesses de rendement très intéressantes. »"
                                image-path="portrait-2.png"
                                name="Entrepreneur 5"
                                job="CEO d’une ETI de 300 M€ de CA"
                        />
                    </slide>
                    <slide>
                        <EntrepreneurCard
                                testimony="« Frédéric était mon actionnaire majoritaire chez Sagard. Cette fois c’est moi qui suis rentré dans sa société de gestion. J’ai souscrit à Equinox dès ses débuts car mes produits d’épargne classique n’offraient plus de rendement du tout. »"
                                image-path="portrait-3.png"
                                name="Entrepreneur 6"
                                job="CEO d’une ETI de 300 M€ de CA"
                        />
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel'
    import EntrepreneurCard from './components/EntrepreneurCard'

    export default {
        name: "SupportBlock",
        components: {EntrepreneurCard, Carousel, Slide}
    }
</script>

<style scoped lang="scss">
</style>
