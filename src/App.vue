<template>
    <div id="app">
        <Navbar :initialized-in-white="$route.path !== '/'"/>
        <div id="app-content">
            <router-view/>
        </div>
        <Subscribe/>
        <Footer/>
        <Scroller/>
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
        }
    }
</script>


<style scoped lang="scss">
</style>
