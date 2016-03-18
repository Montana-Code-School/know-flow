'use strict';

const {FlatButton, AppBar} = MUI;

Globals.Navbar = function(props, context) {

  const {river} = props;
  const {servicesReady, loggedIn, username, logout, loginWithFacebook} = context.UserAuthentication;

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
};

Navbar.contextTypes = {
  UserAuthentication: React.PropTypes.object.isRequired
};
