'use strict';

Globals.Navbar = React.createClass({

  render() {
    const {AppBar, IconMenu, MenuItem, IconButton} = MUI;
    const {NavigationMoreVert} = MUI.Libs.SvgIcons;
    const loginButton =  Meteor.userId() ?
                         <MenuItem primaryText="Logout" onClick={Meteor.logout} /> :
                         <MenuItem primaryText="Login" linkButton={true} href="/login" style={{margin: -8, textAlign: 'center'}}/>;
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
