'use strict';

const {FlatButton, AppBar} = MUI;

Globals.Navbar = function(props, context) {

  const {river} = props;
  const {servicesReady, loggedIn, username, logout, loginWithFacebook} = context.UserAuthentication;

  let widgets = null;
  if (servicesReady) {
    if (loggedIn) {
      widgets = <FlatButton onTouchTap={logout} style={{marginRight: '5px'}}>Logout {username}</FlatButton>
    } else {
      widgets = <FlatButton onTouchTap={loginWithFacebook}  style={{marginRight: '5px'}}>Login with Facebook</FlatButton>
    }
  }

  return (
    <AppBar
      className="navbar"
      title={`KnowFlow: ${river.name}`}
      zDepth={4}
      iconElementRight={widgets}
      style={{position: 'fixed'}}
    />
  )
};

Navbar.contextTypes = {
  UserAuthentication: React.PropTypes.object.isRequired
};
