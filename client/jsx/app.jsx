'use strict';

import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import {AppCanvas} from 'material-ui';
import {Loader} from './mapbox/mapbox';
import {UserAuthenticationContext} from './user-authentication-context';
import {GlobalTheme} from './global-theme';
import {Navbar} from './navbar';
import {FE_Pane} from './float-estimate/fe-pane';
import {River} from '../../data/river';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0';

export const App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    const river = River.findOne('1');

    return {
      river: river,
      riverReady: river != null
    }
  },

  render() {
    const {river, riverReady} = this.data;

    if (riverReady) {
      return (
        <UserAuthenticationContext>
          <Loader accessToken={MAPBOX_ACCESS_TOKEN} gl={false} plugins={['label']} >
            <AppCanvas>
              <GlobalTheme>
                <Navbar river={river} />
                <FE_Pane river={river}/>
              </GlobalTheme>
            </AppCanvas>
          </Loader>
        </UserAuthenticationContext>
      )
    } else {
      return null;
    }
  }
});