<template>
    <a vue-scroll-to="{
         el: '#home',
         duration: 500,
         easing: 'linear'
     }" href="#" id="scroller" :class="{'d-none': !showButton}">
        <FontAwsomeCircledIcon icon-class="arrow-up"/>
    </a>
</template>

<script>
    import FontAwsomeCircledIcon from '../shared/FontAwsomeCircledIcon'

    export default {
        name: "Scroller",
        components: {FontAwsomeCircledIcon},
        data() {
            return {
                showButton: false,
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll() {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

                this.showButton = currentScrollPosition >= 50;
            }
        }
    }
</script>

<style scoped lang="scss">
    #scroller {
        z-index: 10;
        position: fixed;
        bottom: 25px;
        right: 25px;
    }
</style>
