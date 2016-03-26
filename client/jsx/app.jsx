'use strict';

import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import {AppCanvas} from 'material-ui';
import {Loader} from './mapbox/mapbox';
import {UserAuthenticationContext} from './meteor-helpers/meteor-helpers';
import {GlobalTheme} from './global-theme';
import {Navbar} from './navbar';
import {FE_Data} from './float-estimate/fe-data';
import {River} from '../../data/river';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0';

export const App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    const riversHandle = Meteor.subscribe('rivers');

    const handle = Meteor.subscribe('rivers');
    const data = {};
    data.ready = handle.ready();
    if (data.ready) {
      data.river = River.findOne('1');
    }
    return data;
  },

  render() {
    const {ready, river} = this.data;

    return (
      <UserAuthenticationContext>
        <Loader accessToken={MAPBOX_ACCESS_TOKEN} gl={false} plugins={['label']} >
          <AppCanvas>
            <GlobalTheme>
              {ready ? <Navbar river={river} /> : null}
              {ready ? <FE_Data river={river}/> : null}
            </GlobalTheme>
          </AppCanvas>
        </Loader>
      </UserAuthenticationContext>
    )
  }
});