'use strict';

FlowRouter.route('/teague', {
  name: 'teagueLayout',
  action() {
    ReactLayout.render(TeagueLayout);
  }
});

FlowRouter.route('/', {
  name: 'App',
  action() {
    ReactLayout.render(App);
  }
});

FlowRouter.route('/login', {
  name: 'Login',
  action() {
    ReactLayout.render(Login);
  }
});

