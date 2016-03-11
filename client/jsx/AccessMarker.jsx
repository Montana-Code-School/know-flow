'use strict';

Globals.AccessMarker = React.createClass({

  propTypes: {
    map: React.PropTypes.object.isRequired,
    access: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      marker: null,
      markerReady: false
    }
  },

  componentDidMount() {
    if (! this.state.markerReady) {
      this._createMarker();
    }
  },

  componentDidUpdate() {
    if (! this.state.markerReady) {
      this._createMarker();
    }
  },

  _createMarker() {
    const access = this.props.access;
    const marker = L.marker([access.lat, access.lng]);
    this._addPopupToMarker(marker, access);
    marker.addTo(this.props.map);
    this.setState({
      marker: marker,
      markerReady: true
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
    return null;
  }
});