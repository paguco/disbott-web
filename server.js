require('dotenv-safe').load();

const Datastore = require('nedb');

const db = new Datastore({ filename: './db/songs.db', autoload: true });

const path = require('path');
const express = require('express');

const app = express();
const server = require('http').Server(app); //eslint-disable-line
const io = require('socket.io')(server);
const fetch = require('isomorphic-fetch');

const processSongs = require('./process-songs');

app.use(express.static(path.join(`${__dirname}/dist`)));

app.get('/api/appveyor', (req, res) => {
  const appveyorToken = process.env.APPVEYOR_TOKEN;
  fetch('https://ci.appveyor.com/api/projects/uchuu/disbott', { // eslint-disable-line
    headers: {
      Authorization: `Bearer ${appveyorToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((build) => {
      res.json(build);
    });
});

app.get('/api/coveralls', (req, res) => {
  fetch('https://coveralls.io/github/uchuuio/disbott.json') // eslint-disable-line
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((coverage) => {
      res.json(coverage);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

io.on('connection', (socket) => {
  db.find({}, (err, songs) => {
    const orderedSongs = songs.reverse();
    orderedSongs.slice(0, 10);
    orderedSongs.sort((a, b) => a.order - b.order);
    socket.emit('joinedSongs', orderedSongs);
  });

  // Should recieve songs from Disbott & Website
  socket.on('addSong', (url) => {
    processSongs.addUrl(url, db)
      .then((song) => {
        console.log(song);
        socket.emit('addedSong', song);
      });
  });
});

server.listen(3000);
