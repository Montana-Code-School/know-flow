'use strict';

App.info({
  id: 'app.knowflow',
  name: 'KnowFlow',
  description: 'Get accurate float times for your river adventures!',
  author: 'KnowFlow Industries',
  email: 'contact@knowflow.app',
  website: 'http://knowflow.app'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');