<template>
  <form class="url-input" action="" v-on:submit.prevent="addSong">
    <input type="text" name="url" />
    <button type="submit">submit</button>
  </form>
</template>

<script>
export default {
  name: 'url-input',
  methods: {
    addSong(e) {
      const url = e.srcElement[0].value;
      this.$socket.emit('addSong', url);
      e.target.reset();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
