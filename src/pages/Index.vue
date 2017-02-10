<template>
  <div id="index">
    <Hero></Hero>
    <Navigation></Navigation>
    <Commands></Commands>
    <About></About>
    <Footer></Footer>
  </div>
</template>

<script>
import Hero from './../components/Hero';
import Navigation from './../components/Navigation';
import Commands from './../components/Commands/Index';
import About from './../components/About';
import Footer from './../components/Footer';

export default {
  name: 'index',
  components: {
    Hero,
    Navigation,
    Commands,
    About,
    Footer,
  },
};
</script>

<style>
</style>
