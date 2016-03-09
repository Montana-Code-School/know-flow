'use strict';

Globals.GoogleMapsLoader = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  componentDidMount() {
    GoogleMaps.load({key: 'AIzaSyAO4J0Nadxs1vCVCkxnaByhwD1-kk7Z_OQ'});
  },

  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded()
    }
  },

  render() {
    if (this.data.loaded) {
      return (
        this.props.children
      )
    } else {
      return (
        <h2>Loading...</h2>
      )
    }
  }
});