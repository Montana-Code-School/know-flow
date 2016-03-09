'use strict';

Globals.RiverMap = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    river: React.PropTypes.object.isRequired
  },

  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded(),
      mapOptions: GoogleMaps.loaded() && this._mapOptions()
    };
  },

  _mapOptions() {
    return {
      center: {lat: 46.651797, lng: -114.054260},
      draggable: false,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      maxZoom: 11,
      minZoom: 11,
      rotateControl: false,
      zoom: 11
    };
  },

  render() {
    return (
      <GoogleMap name="river-map" options={this._mapOptions()} >
        <GoogleMapMarker options={{}} />
      </GoogleMap>
    )
  }
});
