<template>
    <nav :class="['navbar sticky-top navbar-light py-3 bg-light justify-content-between'
        ,{'transparent':transparent}]">
        <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->
        <a class="navbar-brand logo montserrat">Equinox</a>
        <div class="right-part">
            <button type="button" class="btn btn-suscribe btn-soft-success">Souscrire</button>
        </div>

    </nav>
</template>

<script>
    export default {
        name: 'Nav',
        props: {},
        data() {
            return {
                transparent: true
            }
        },
        methods: {
            handleScroll(event) {
                this.transparent = (window.scrollY < 58);
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll();
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
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
