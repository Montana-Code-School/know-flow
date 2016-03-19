'use strict';

Globals.Mapbox.ZoomControl = React.createClass({

  contextTypes: {
    map: React.PropTypes.object.isRequired
  },

  propTypes: {
    position: React.PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright'])
  },

  componentWillMount() {
    new L.control.zoom({position: this.props.position}).addTo(this.context.map);

  },

  render: () => null
});