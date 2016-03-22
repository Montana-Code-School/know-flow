'use strict';

import React from 'react';
import {Snackbar} from 'material-ui';
import {FE_TripDialog} from './fe-trip-dialog';

export const FE_Snackbar = React.createClass({

  contextTypes: {
    UserAuthentication: React.PropTypes.object
  },

  propTypes: {
   message: React.PropTypes.string
  },

  render: function () {
    const {message} = this.props;
    const {servicesReady, loggedIn, loginWithFacebook} = this.context.UserAuthentication;
    const action = servicesReady && !loggedIn ? 'Login to Record Trip' : null;

    return (
      <div>
        <Snackbar
          open={true}
          autoHideDuration={5000}
          message={ <span style={{fontSize: '18px'}}>{message}</span> }
          action={action}
          onActionTouchTap={loginWithFacebook}
          bodyStyle={{'textAlign': 'center', fontFamily: "'Roboto', sans-serif"}}
        />
      </div>
    );
  }
});


