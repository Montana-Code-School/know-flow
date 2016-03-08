'use strict';

FlowRouter.route('/john', {
  name: 'johnLayout',
  action() {
    ReactLayout.render(JohnLayout);
  }
});

FlowRouter.route('/jay', {
  name: 'jayLayout',
  action() {
    ReactLayout.render(JayLayout);
  }
});

FlowRouter.route('/teague', {
  name: 'teagueLayout',
  action() {
    ReactLayout.render(TeagueLayout);
  }
});
