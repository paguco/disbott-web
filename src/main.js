// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueWebsocket from 'vue-websocket';
import App from './App';
import Index from './pages/Index';
import Playlist from './pages/Playlist';

Vue.use(VueWebsocket, 'ws://localhost:3000');

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Index },
  { path: '/playlist', component: Playlist },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    songs: [],
  },
  mutations: {
    addedSong(state, song) {
      state.songs.push(song);
    },
    joinedSongs(state, songs) {
      state.songs = songs; //eslint-disable-line
    },
  },
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
