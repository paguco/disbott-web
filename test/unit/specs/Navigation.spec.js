import Vue from 'vue';
import Navigation from 'src/components/Navigation';

describe('Navigation.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), //eslint-disable-line
      render: h => h(Navigation),
    });
  });

  it('should render 3 main links', () => {
    expect(vm.$el.querySelectorAll('.navigation .dtc.v-mid.w-75 a'))
      .to.have.length(3);
  });

  it('should render 2 sub links', () => {
    expect(vm.$el.querySelectorAll('.navigation .dtc.v-mid.w-25 a'))
      .to.have.length(2);
  });
});
