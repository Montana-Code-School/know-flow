'use strict';

import React from 'react';
import {Snackbar} from 'material-ui';
import {FE_TripDialog} from './fe-trip-dialog';

const MESSAGES = {
  'trip-saved': 'The trip has been recorded.',
  'zero-accesses': 'Please select a waypoint.',
  'one-access': 'Select another waypoint',
  'two-accesses': 'You may now record this trip.'
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

  shouldComponentUpdate(nextProps) {
    if (this.props.messageCode !== nextProps.messageCode) {
      return true;
    }

    if (this.props.selectedAccesses.length !== nextProps.selectedAccesses.length) {
      return true;
    }
    return false;
  },

  componentWillUpdate(nextProps, nextState) {
    let newCode = null;
    if (this.props.messageCode !== nextProps.messageCode) {
      newCode = nextProps.messageCode;
    } else if (this.props.selectedAccesses.length !== nextProps.selectedAccesses.length) {
      newCode = SELECTED_ACCESSES_CODES[nextProps.selectedAccesses.length];
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