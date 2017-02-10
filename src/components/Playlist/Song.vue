<template>
  <article>
    <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" v-bind:href="song.url">
      <div class="dtc w4">
        <img v-bind:src="song.thumbnailUrl" class="db w-100"/>
      </div>
      <div class="dtc v-top pl2">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ song.title }}</h1>
        <h2 class="f6 fw4 mt2 mb0 black-60">{{ song.owner.name }}</h2>
        <dl class="mt2 mb0 f6">
          <dt class="clip">Duration</dt>
          <dd class="ml0">{{ song.prettyDuration }}</dd>
        </dl>
      </div>
    </a>
  </article>
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
