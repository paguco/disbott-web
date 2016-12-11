<template>
  <div id="app">
    <hero></hero>
    <navigation></navigation>
    <commands></commands>
    <about></about>
    <Footer></Footer>
  </div>
</template>

<script>
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Commands from './components/Commands/Index';
import About from './components/About';
import Footer from './components/Footer';

export default {
  name: 'app',
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
