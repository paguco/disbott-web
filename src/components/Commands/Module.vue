<template>
  <div class="module">
    <h4>{{name}}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'module',
  props: ['name'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
