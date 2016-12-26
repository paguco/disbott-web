import Vue from 'vue';
import Footer from 'src/components/Footer';

describe('Footer.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), //eslint-disable-line
      render: h => h(Footer),
    });
  });

  it('should render correct text', () => {
    expect(vm.$el.querySelector('.footer a').textContent)
      .to.equal('-uchuu-');
  });

  it('should link to uchuu\'s homepage', () => {
    expect(vm.$el.querySelector('.footer a').href)
      .to.equal('https://www.uchuu.io/');
  });

  it('should have the link title', () => {
    expect(vm.$el.querySelector('.footer a').getAttribute('title'))
      .to.equal('Created by uchuu & friends');
  });
});
