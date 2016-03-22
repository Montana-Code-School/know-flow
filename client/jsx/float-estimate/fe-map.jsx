'use strict';

import React from 'react';
import {Map, ZoomControl} from '../mapbox/mapbox';
import {FE_MarkerManager} from './fe-marker-manager';

const MAPBOX_MAP_ID = 'jcheroske.fcbca93a';

export const FE_Map = React.createClass({

  propTypes: {
    mapOptions: React.PropTypes.object.isRequired,
    accesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    accessClickHandler: React.PropTypes.func.isRequired
  },

  _mapOptions() {
    const {mapOptions} = this.props;

    return {
      center: mapOptions.center.toArray(),
      maxBounds: mapOptions.maxBounds.toArray(),
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
      <Map mapId={MAPBOX_MAP_ID} options={this._mapOptions()} >
        <ZoomControl position={'topright'} />
        <FE_MarkerManager accesses={accesses} selectedAccesses={selectedAccesses} accessClickHandler={accessClickHandler} />
      </Map>
    )
  }
});
