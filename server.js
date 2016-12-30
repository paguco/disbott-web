require('dotenv-safe').load();

const path = require('path');
const express = require('express');
const fetch = require('isomorphic-fetch');

const app = express();
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

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.listen(3000);
