'use strict';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0';
const MAPBOX_MAP_ID = 'jcheroske.fcbca93a';

Globals.RiverMap = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    river: React.PropTypes.object.isRequired,
    selectedAccesses: React.PropTypes.array.isRequired,
    accessClickHandler: React.PropTypes.func.isRequired
  },

  getMeteorData() {
    const accesses = this.props.river.accesses().fetch();
    return {
      accesses: accesses,
      accessesReady: accesses.length > 0
    };
  },

  _mapOptions() {
    const ZOOM_LEVEL = 11;

    return {
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
      dragging: true
    }
  },

  render() {
    if (this.data.accessesReady) {
      const accesses = this.data.accesses;
      const {selectedAccesses, accessClickHandler} = this.props;

      return (
        <MapboxLoader accessToken={MAPBOX_ACCESS_TOKEN} gl={true} plugins={['label']} >
          <Map mapId={MAPBOX_MAP_ID} options={this._mapOptions()} >
            <AccessMarkerManager accesses={accesses} selectedAccesses={selectedAccesses} accessClickHandler={accessClickHandler} />
          </Map>
        </MapboxLoader>
      )
    } else {
      return null;
    }
  }
});
