'use strict';

Globals.App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() { //no freakin crud api you just spoke to the server
    const river = Rivers.findOne('1');

    return {
      river: river,
      riverReady: river != null
    }
  },

  render() {
    if (this.data.riverReady) {
      const header = <RiverHeader river={ this.data.river } />;
      const map = <RiverMap river={ this.data.river } />;

      return <MainLayout header={header} map={map} />;
    } else {
      return null;
    }
  }
});