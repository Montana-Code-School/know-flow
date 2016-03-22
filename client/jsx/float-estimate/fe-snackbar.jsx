'use strict';

import React from 'react';
import {Snackbar} from 'material-ui';
import {FE_TripDialog} from './fe-trip-dialog';

const MESSAGES = {
  'user-login': 'You are now logged into Facebook.',
  'user-logout': 'You have been logged out.',
  'trip-saved': 'The trip has been recorded.',
  'zero-accesses': 'Please select a waypoint.',
  'one-access': 'Select another waypoint',
  'two-accesses': 'You may now record this trip.',
  'login-to-record': 'Trip recording requires login.'
};

const SELECTED_ACCESSES_CODES = ['zero-accesses', 'one-access', 'two-accesses'];

export const FE_Snackbar = React.createClass({

  contextTypes: {
    UserAuthentication: React.PropTypes.object
  },

  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    messageCode: React.PropTypes.string
  },

  getInitialState() {
    return {
      messageCode: 'zero-accesses'
    }
  },

  shouldComponentUpdate(nextProps, _, nextContext) {
    if (nextProps.messageCode === 'trip-saved' || this.props.messageCode !== nextProps.messageCode) {
      return true;
    }

    if (this.props.selectedAccesses.length !== nextProps.selectedAccesses.length) {
      return true;
    }

    if (this.context.UserAuthentication.userId !== nextContext.UserAuthentication.userId) {
      return true;
    }

    return false;
  },

  componentWillUpdate(nextProps, nextState, nextContext) {
    let newCode = null;
    if (this.props.messageCode !== nextProps.messageCode) {
      newCode = nextProps.messageCode;
    } else if (this.props.selectedAccesses.length !== nextProps.selectedAccesses.length) {
      if (! this.context.UserAuthentication.loggedIn && nextProps.selectedAccesses.length === 2) {
        newCode = 'login-to-record'
      } else {
        newCode = SELECTED_ACCESSES_CODES[nextProps.selectedAccesses.length];
      }
    } else if (this.context.UserAuthentication.userId !== nextContext.UserAuthentication.userId) {
      newCode = nextContext.UserAuthentication.userId ? 'user-login' : 'user-logout';
    } else if (nextProps.messageCode === 'trip-saved') {
      newCode = 'trip-saved';
    }

    nextState.messageCode = newCode;
 },

  render: function () {
    const message = MESSAGES[this.state.messageCode];
    const {servicesReady, loggedIn, loginWithFacebook} = this.context.UserAuthentication;
    const action = servicesReady && ! loggedIn ? 'Login to Record Trip' : null;

    return (
      <div>
        <Snackbar
          open={true}
          autoHideDuration={4000}
          message={ <span style={{fontSize: '18px'}}>{message}</span> }
          action={action}
          onActionTouchTap={loginWithFacebook}
          bodyStyle={{'textAlign': 'center', fontFamily: "'Roboto', sans-serif"}}
        />
      </div>
    );
  }
});