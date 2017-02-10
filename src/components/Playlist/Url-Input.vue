<template>
  <form class="bg-light-red center pa2 w-100 absolute bottom-0 left-0 url-input" action="" v-on:submit.prevent="addSong">
    <fieldset class="cf bn ma0 pa0">
      <div class="cf">
        <label class="clip" for="url">URL</label>
        <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="url..." type="text" name="url" value="" id="url">
        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="submit">
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'url-input',
  methods: {
    addSong(e) {
      const url = e.srcElement[1].value;
      this.$socket.emit('addSong', url);
      e.target.reset();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
