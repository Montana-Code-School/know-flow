'use strict';

const MAPBOX_MAP_ID = 'jcheroske.fcbca93a';

Globals.FloatEstimate.Map = React.createClass({

  propTypes: {
    accesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    accessClickHandler: React.PropTypes.func.isRequired
  },

  _mapOptions() {

    return {
      center: [46.65, -114.054],
      maxBounds: [[46.76, -114.00], [45.9, -114.22]],
      zoom: 11,
      minZoom: 10,
      maxZoom: 12,
      touchZoom: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      boxZoom: false,
      bounceAtZoomLimits: true,
      zoomControl: false,
      dragging: true
    }
  },

  render() {
    const {accesses, selectedAccesses, accessClickHandler} = this.props;

    return (
      <Mapbox.Map mapId={MAPBOX_MAP_ID} options={this._mapOptions()} >
        <Mapbox.ZoomControl position={'bottomright'} />
        <FloatEstimate.AccessMarkerManager accesses={accesses} selectedAccesses={selectedAccesses} accessClickHandler={accessClickHandler} />
      </Mapbox.Map>
    )
  }
});
