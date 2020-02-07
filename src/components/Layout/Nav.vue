<template>
    <nav :class="['navbar sticky-top navbar-light py-3 bg-light justify-content-between'
        ,{'transparent':transparent}]">
        <router-link @click.native="$scrollToTop" to="/" class="navbar-brand logo montserrat">Equinox</router-link>
        <div class="right-part">
            <router-link @click.native="$scrollToTop" to="/#subscribe" href="#subscribe" v-scroll-to="'#subscribe'" class="btn btn-suscribe btn-soft-success">Souscrire</router-link>
        </div>

    </nav>
</template>

<script>
    export default {
        name: 'Nav',
        props: {},
        computed: {
            canBeTransparent: function () {
                return this.$route.meta.hasOwnProperty("navCanBeTransparent") && this.$route.meta.navCanBeTransparent;
            }
        },
        data() {
            return {
                transparent: this.canBeTransparent
            }
        },
        methods: {
            handleScroll(event) {
                if (!this.canBeTransparent) return;
                this.transparent = (window.scrollY < 58);
            }
        },
        created() {
            if (this.canBeTransparent) {
                window.addEventListener('scroll', this.handleScroll);
                this.handleScroll();
            }
        },
        destroyed() {
            if (this.canBeTransparent) {
                window.removeEventListener('scroll', this.handleScroll);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .navbar {
        box-shadow: $box-shadow;

        &.transparent {

            background-color: transparent !important;
            box-shadow: none;

            .logo {
                color: $white;
            }
        }

        .logo {
            color: $gray-900;
            font-weight: 700;
        }

        .btn-suscribe {
            font-weight: 700;
        }
    }
</style>
