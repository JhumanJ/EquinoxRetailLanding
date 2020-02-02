<template>
  <div id="home">
    <Hero />
    <ROIBlock />
    <RisksBlock/>
    <Subscribe/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Home/Hero.vue';
import ROIBlock from '@/components/Home/Blocks/ROIBlock.vue';
import RisksBlock from '@/components/Home/Blocks/RisksBlock.vue';
import Subscribe from '@/components/Home/Subscribe.vue';
import Footer from '@/components/Home/Footer.vue';

export default {
  name: 'home',
  components: {
      Hero,
      ROIBlock,
      RisksBlock,
      Subscribe,
      Footer
  },
};
</script>

<style scoped lang="scss">
  #home {
    margin-top: -74px;
  }
</style>

