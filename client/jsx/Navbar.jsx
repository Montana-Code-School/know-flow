'use strict';

Globals.Navbar = React.createClass({

  render() {
    const {AppBar} = MUI;

    return (
      <AppBar
        className="navbar"
        title="KnowFlow"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
});
