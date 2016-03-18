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
      center: [46.65, -114.054],
      maxBounds: [[46.76, -114.00], [45.9, -114.22]],
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
