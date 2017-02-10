<template>
  <div class="song">
    <h1>{{ song.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'song',
  props: [
    'song',
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
