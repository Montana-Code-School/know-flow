'use strict';

import React from 'react';
import {mount} from 'react-mounter';
import {App} from './jsx/app';

FlowRouter.route('/', {
  name: 'App',
  action() {
    mount(App);
  }
});
