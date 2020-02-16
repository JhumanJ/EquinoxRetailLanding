<template>
    <div id="home">
        <Hero/>
        <RoIBlock/>
        <RisksBlock/>
        <TeamBlock/>
        <SelectionBlock/>
        <InvestBlock/>
        <ResponsibilityBlock/>
        <TransparencyBlock/>
        <TrustBlock/>
        <SupportBlock/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Hero from '@/components/Home/Hero.vue'
    import RoIBlock from '@/components/Home/Blocks/RoIBlock.vue'
    import RisksBlock from '@/components/Home/Blocks/RisksBlock.vue'
    import TeamBlock from '../components/Home/Blocks/TeamBlock'
    import SelectionBlock from '../components/Home/Blocks/SelectionBlock'
    import InvestBlock from '../components/Home/Blocks/InvestBlock'
    import ResponsibilityBlock from '../components/Home/Blocks/ResponsibilityBlock'
    import TransparencyBlock from '../components/Home/Blocks/TransparencyBlock'
    import TrustBlock from '../components/Home/Blocks/TrustBlock'
    import SupportBlock from '../components/Home/Blocks/SupportBlock'

    export default {
        name: 'home',
        components: {
            SupportBlock,
            TrustBlock,
            TransparencyBlock,
            ResponsibilityBlock,
            InvestBlock,
            SelectionBlock,
            Hero,
            RoIBlock,
            RisksBlock,
            TeamBlock
        },
        mounted() {
            this.$scrollToTop();
        }
    }
</script>

<style scoped lang="scss">
    #home {
        margin-top: -74px;
    }
</style>

