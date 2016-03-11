'use strict';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0';
const MAPBOX_MAP_ID = 'jcheroske.pceh4a5i';

Globals.RiverMap = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    river: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      map: null,
      accessMarkers: []
    }
  },

  getMeteorData() {
    return {
      ready: Mapbox.loaded(),
      accesses: this.props.river.accesses().fetch()
    };
  },

  componentDidUpdate() {
    if (this.data.ready) {

      if (! this.state.map) {
        this.setState({
          map: this._createMap()
        });
      }

      if (this.state.map && this.state.accessMarkers.length === 0 && this.data.accesses.length > 0) {
        this.setState({
          accessMarkers: this._addAccessMarkers()
        });
      }
    }
  },

  _mapOptions() {
    const ZOOM_LEVEL = 11;

    return {
      accessToken: MAPBOX_ACCESS_TOKEN,
      center: [46.651797, - 114.054260],
      maxBounds: [[46.714841, - 113.998347], [45.889571, - 114.219819]],
      zoom: ZOOM_LEVEL,
      minZoom: ZOOM_LEVEL,
      maxZoom: ZOOM_LEVEL,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      bounceAtZoomLimits: false,
      zoomControl: false,
      dragging: true,
    }
  },

  _createMap() {
    return L.mapbox.map('map-container', MAPBOX_MAP_ID, this._mapOptions());
  },

  _addAccessMarkers() {

    return this.data.accesses.map(access => {
      const marker = L.marker([access.lat, access.lng]);
      this._addPopupToMarker(marker, access);
      marker.addTo(this.state.map);
      return marker;
    });
  },

  _addPopupToMarker(marker, access) {
    const html = React.renderToString(
      <ul>
        <li>{access.name}</li>
        <li>Put-in: {'' + access.putIn}</li>
        <li>Take-out: {'' + access.takeOut}</li>
      </ul>
    );

    const popup = L.popup({
      className: 'access-popup'
    });
    popup.setContent(html);

    marker.bindPopup(popup).openPopup();
  },

  render() {
    return <div id="map-container"></div>;
  }
});

//https://api.mapbox.com/styles/v1/jcheroske/cilml8oqx007rabkquhbi36rr.html?title=true&access_token=pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0
