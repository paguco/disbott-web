import Vue from 'vue';
import About from 'src/components/About';

describe('About.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), //eslint-disable-line
      render: h => h(About),
    });
  });

  it('should render correct title', () => {
    expect(vm.$el.querySelector('.about h3').textContent)
      .to.equal('About');
  });
});
