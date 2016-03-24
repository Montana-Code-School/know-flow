'use strict';

import React from 'react';
import {FlatButton, AppBar, Avatar} from 'material-ui';

export const Navbar = React.createClass({

  propTypes: {
    river: React.PropTypes.object.isRequired
  },

  contextTypes: {
    UserAuthentication: React.PropTypes.object.isRequired
  },

  render() {
    const {river} = this.props;
    const {servicesReady, loggedIn, username, profilePicture, logout, loginWithFacebook} = this.context.UserAuthentication;

    let userAuthButton = null;
    let avatar = null;
    if (servicesReady) {
      const buttonStyle = {marginRight: 16};
      if (loggedIn) {
        userAuthButton = <FlatButton onTouchTap={logout} style={buttonStyle}>{`Logout ${username}`}</FlatButton>
        avatar = <Avatar src={profilePicture} style={{marginTop: 11, marginLeft: 10}}/>
      } else {
        userAuthButton = <FlatButton onTouchTap={loginWithFacebook} style={buttonStyle}>{'Login with Facebook'}</FlatButton>
      }
    }

    return (
      <AppBar
        id="navbar"
        title={`KnowFlow: ${river.name}`}
        zDepth={4}
        iconElementRight={userAuthButton}
        style={{position: 'fixed', paddingRight: 10}}
      >
        <div>{avatar}</div>
      </AppBar>
    )
  }
});
