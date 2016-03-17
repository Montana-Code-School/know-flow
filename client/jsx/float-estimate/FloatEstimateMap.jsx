'use strict';

const MAPBOX_MAP_ID = 'jcheroske.fcbca93a';

Globals.FloatEstimateMap = React.createClass({

  propTypes: {
    accesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    accessClickHandler: React.PropTypes.func.isRequired
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
    const {accesses, selectedAccesses, accessClickHandler} = this.props;

    return (
      <Map mapId={MAPBOX_MAP_ID} options={this._mapOptions()} >
        <AccessMarkerManager accesses={accesses} selectedAccesses={selectedAccesses} accessClickHandler={accessClickHandler} />
      </Map>
    )
  }
});
