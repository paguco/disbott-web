<template>
  <div id="playlist">
    <div class="playlist-songs">
      <Song v-for="song in songs" v-bind:song="song" :key="song._id" />
    </div>
    <Url-Input />
  </div>
</template>

<script>
import Song from './../components/Playlist/Song';
import UrlInput from './../components/Playlist/Url-Input';

export default {
  name: 'playlist',
  components: {
    Song,
    UrlInput,
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    },
  },
  created() {
    this.setupSockets();
  },
  watch: {
    // call again the method if the route changes
    $route: 'setupSockets',
  },
  methods: {
    setupSockets() {
      this.$socket.on('joinedSongs', (data) => {
        this.$store.commit('joinedSongs', data);
      });
      this.$socket.on('addedSong', (data) => {
        console.log(data);
        this.$store.commit('addedSong', data);
      });
    },
  },
};
</script>

<style>
</style>
