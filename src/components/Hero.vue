<template>
  <div class="hero">
    <h1 class="di">{{name}}</h1><a v-bind:href="version.link" class="ml1 f4 ml2 version" title="Current Version">{{version.name}}</a>
    <h2>{{tag}}</h2>
    <p class="dev-info">
      Build: <a href="https://ci.appveyor.com/project/tomopagu/disbott" title="Appveyor Latest Build" class="appveyor-build">{{build}}</a> |
      Test Coverage: <a href="https://coveralls.io/github/uchuuio/disbott" title="Coveralls Test Coverage" class="coveralls">{{coverage}}%</a>
    </p>
  </div>
</template>

<script>
import 'isomorphic-fetch';

require('es6-promise').polyfill();

export default {
  name: 'hero',
  data() {
    return {
      name: 'DISBOTT',
      tag: 'Discord robot for your server',
      version: {
        name: 'v3',
        link: 'https://github.com/uchuuio/disbott',
      },
      build: '',
      coverage: '0',
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getCurrentVersion();
    this.getBuildData();
    this.getCurrentCoverage();
  },
  methods: {
    getCurrentVersion() {
      const self = this;
      fetch('https://api.github.com/repos/uchuuio/disbott/releases') // eslint-disable-line
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        })
        .then((releases) => {
          self.version.name = releases[0].name;
          self.version.link = releases[0].html_url;
        });
    },
    getBuildData() {
      const self = this;
      fetch('/api/appveyor') // eslint-disable-line
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        })
        .then((appveyor) => {
          if (appveyor.build.status === 'success') {
            self.build = 'Passing';
          } else {
            self.build = 'Failing';
          }
        });
    },
    getCurrentCoverage() {
      const self = this;
      fetch('/api/coveralls') // eslint-disable-line
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        })
        .then((coverage) => {
          self.coverage = coverage.covered_percent.toFixed(2);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  background: #FF4C3B;
  color: #FFFCF9;
  padding: 30px;
}

a {
  color: #fff;
}
a:hover,
a:focus {
  color: #FFD034
}

h1, h2 {
  font-weight: normal;
  margin: 0;
}

.dev-info {
  margin-bottom: 0;
}
</style>
