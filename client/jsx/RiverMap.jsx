'use strict';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0';
const MAPBOX_MAP_ID = 'jcheroske.pceh4a5i';

Globals.RiverMap = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    river: React.PropTypes.object.isRequired
  },

  getMeteorData() {
    return {
      loaded: Mapbox.loaded(),
      map: this._createMap(),
      accesses: this.props.river.accesses().fetch()
    };
  },

  _mapOptions() {
    const ZOOM_LEVEL = 11;

    return {
      accessToken: MAPBOX_ACCESS_TOKEN,
      center: [46.651797, -114.054260],
      maxBounds: [[46.714841, -113.998347], [45.889571, -114.219819]],
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
    if(Mapbox.loaded()) {
      const map = L.mapbox.map('map-container', MAPBOX_MAP_ID, this._mapOptions());

      this.props.river.accesses().fetch().forEach(a => {
        L.marker([a.lat, a.lng]).addTo(map);
      });
    }
  },

  render() {
    return <div id="map-container"></div>;
  }
});

//https://api.mapbox.com/styles/v1/jcheroske/cilml8oqx007rabkquhbi36rr.html?title=true&access_token=pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0
