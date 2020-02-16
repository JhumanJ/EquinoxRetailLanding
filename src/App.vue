<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <div class="page" v-if="secured" key="page">
                <Navbar :initialized-in-white="$route.path !== '/'"/>
                <div id="app-content">
                    <router-view/>
                </div>
                <Subscribe/>
                <Footer/>
                <Scroller/>
            </div>
            <div class="secure row py-6" v-else key="password">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <h1 class="text-center">Equinox Private Website</h1>
                    <input type="password" class="form-control" v-model="password" placeholder="password"
                           @input="check">
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Footer from './components/Layout/Footer'
    import Scroller from './components/Layout/Scroller'
    import Navbar from './components/Layout/Navbar'
    import Subscribe from './components/Home/Subscribe'

    export default {
        name: 'App',
        components: {
            Subscribe,
            Navbar,
            Scroller,
            Footer
        },
        data() {
            return {
                password: '',
                secured: false,
            }
        },
        methods: {
            check() {
                this.secured = this.hash(this.password) == -1934878501;
            },
            hash: function (s) {
                return s.split("").reduce(function (a, b) {
                    a = ((a << 5) - a) + b.charCodeAt(0);
                    return a & a
                }, 0);
            }
        }
    }
</script>


<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
