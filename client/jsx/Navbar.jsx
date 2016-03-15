'use strict';

Globals.Navbar = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    console.log('in getMeteorData');

    return {
      loggedIn: Meteor.userId() != null
    }
  },

  handleLogout() {
    Meteor.logout();
  },

  render() {
    const {AppBar, IconMenu, MenuItem, IconButton} = MUI;
    const {NavigationMoreVert} = MUI.Libs.SvgIcons;
    const loginButton =  this.data.loggedIn ?
      <MenuItem primaryText="Logout" onClick={this.handleLogout} style={{margin: -8, textAlign: 'center'}} /> :
      <Accounts.ui.LoginServices />;
    
    return (
      <AppBar
        className="navbar"
        title="KnowFlow"
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><NavigationMoreVert /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}} 
          >
            {loginButton}
          </IconMenu>
        }
      />      
    )
  }
});
