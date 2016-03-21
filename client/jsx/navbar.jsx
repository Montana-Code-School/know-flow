'use strict';

import React from 'react';
import {FlatButton, AppBar} from 'material-ui';

export const Navbar = React.createClass({

  propTypes: {
    river: React.PropTypes.object.isRequired
  },

  contextTypes: {
    UserAuthentication: React.PropTypes.object.isRequired
  },

  render() {
    const {river} = this.props;
    const {servicesReady, loggedIn, username, logout, loginWithFacebook} = this.context.UserAuthentication;

    let userAuthButton = null;
    if (servicesReady) {
      let buttonAction = null;
      let buttonLabel = null;
      if (loggedIn) {
        buttonAction = logout;
        buttonLabel = `Logout ${username}`;
      } else {
        buttonAction = loginWithFacebook;
        buttonLabel = 'Login with Facebook';
      }
      userAuthButton = <FlatButton onTouchTap={buttonAction} style={{marginRight: '5px'}}>{buttonLabel}</FlatButton>
    }

    return (
      <AppBar
        className="navbar"
        title={`KnowFlow: ${river.name}`}
        zDepth={4}
        iconElementRight={userAuthButton}
        style={{position: 'fixed'}}
      />
    )
  }
});
