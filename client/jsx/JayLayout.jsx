'use strict';

Globals.JayLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      river: Rivers.findOne('1')
    }
  },

  render() {
    if (this.data.river) {
      return <RiverMap river={this.data.river}/>
    } else {
      return <h1>Loading...</h1>
    }
  }
});