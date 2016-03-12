'use strict';

Globals.MarkerIcon = React.createClass({

  contextTypes: {
    marker: React.PropTypes.object.isRequired
  },

  propTypes: {
    url: React.PropTypes.string.isRequired,
    height: React.PropTypes.number,
    width: React.PropTypes.number
  },

  render() {
    const icon = L.icon({
      iconUrl: this.props.url,
      iconSize: [this.props.height, this.props.width]
    });

    this.context.marker.setIcon(icon);
    return null;
  }
});

/*
 var myIcon = L.icon({
 iconUrl: 'my-icon.png',
 iconRetinaUrl: 'my-icon@2x.png',
 iconSize: [38, 95],
 iconAnchor: [22, 94],
 popupAnchor: [-3, -76],
 shadowUrl: 'my-icon-shadow.png',
 shadowRetinaUrl: 'my-icon-shadow@2x.png',
 shadowSize: [68, 95],
 shadowAnchor: [22, 94]
 });
 */

