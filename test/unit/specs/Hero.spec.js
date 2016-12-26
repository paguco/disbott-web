import Vue from 'vue';
import Hero from 'src/components/Hero';

describe('Hero.vue', () => {
  let vm = null;

  before((done) => {
    setTimeout(() => {
      vm = new Vue({
        el: document.createElement('div'), //eslint-disable-line
        render: h => h(Hero),
      });

      // complete the async beforeEach
      done();
    }, 1000);
  });

  it('should render correct title', () => {
    expect(vm.$el.querySelector('.hero h1').textContent)
      .to.equal('DISBOTT');
  });

  it('should link to current version', () => {
    expect(vm.$el.querySelector('.hero a.version').getAttribute('title'))
      .to.equal('Current Version');
  });

  it('should render correct tagline', () => {
    expect(vm.$el.querySelector('.hero h2').textContent)
      .to.equal('Discord robot for your server');
  });

  describe('the dev-info area', () => {
    it('should have 2 links', () => {
      expect(vm.$el.querySelectorAll('.hero .dev-info a'))
        .to.have.length(2);
    });

    it('should link to appveyor build page', () => {
      expect(vm.$el.querySelector('.hero .dev-info a.appveyor-build').href)
        .to.equal('https://ci.appveyor.com/project/tomopagu/disbott');
    });

    it('should link to coveralls', () => {
      expect(vm.$el.querySelector('.hero .dev-info a.coveralls').href)
        .to.equal('https://coveralls.io/github/uchuuio/disbott');
    });
  });
});
