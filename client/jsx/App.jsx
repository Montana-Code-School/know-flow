'use strict';

Globals.App = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      showHeaderDropdown: false
    }
  },

  getMeteorData: function() { //no freakin crud api you just spoke to the server
    const river = Rivers.findOne('1');

    return {
      river: river,
      riverReady: river != null
    }
  },

  accessSelected(access) {
    console.log(access);
    this.setState({
      showHeaderDropdown: true
    });
  },

  render() {
    if (this.data.riverReady) {
      const header = <Navbar />;
      const headerDropdown = this.state.showHeaderDropdown ? <HeaderDropdown /> : null;
      const map = <RiverMap river={ this.data.river } accessSelected={this.accessSelected} />;

      return <MainLayout header={header} headerDropdown={headerDropdown} map={map} />;
    } else {
      return null;
    }
  }
});