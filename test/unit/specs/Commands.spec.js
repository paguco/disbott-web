import Vue from 'vue';
import Commands from 'src/components/Commands/Index';
import Module from 'src/components/Commands/Module';
import Command from 'src/components/Commands/Command';

describe('Commands.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), //eslint-disable-line
      render: h => h(Commands),
    });
  });

  it('should render correct title', () => {
    expect(vm.$el.querySelector('.commands h3').textContent)
      .to.equal('Commands');
  });
});

describe('Module.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), //eslint-disable-line
      render: h => h(Module, {
        props: {
          name: 'Test Module',
        },
      }),
    });
  });

  it('should render correct module title', () => {
    expect(vm.$el.querySelector('.module h4').textContent)
      .to.equal('Test Module');
  });
});

describe('Command.vue', () => {
  let vm = null;

  before(() => {
    vm = new Vue({
      el: document.createElement('div'), //eslint-disable-line
      render: h => h(Command, {
        props: {
          description: 'Test Command',
          command: 'test',
        },
      }),
    });
  });

  it('should render correct command description', () => {
    expect(vm.$el.querySelector('.command span.description').textContent)
      .to.equal('Test Command');
  });

  it('should render correct command', () => {
    expect(vm.$el.querySelector('.command code').textContent)
      .to.equal('@disbott test');
  });
});
