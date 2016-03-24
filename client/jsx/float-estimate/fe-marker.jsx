'use strict';

import React from 'react';
import {Paper} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';
import {MapsPlace, MapsBeenhere} from 'material-ui/lib/svg-icons';
import {Marker, MarkerDivIcon, MarkerLabel} from '../mapbox/mapbox';

const COLORS = {
  ready: Colors.indigo500,
  selected: Colors.orange800,
  putIn: Colors.green500,
  takeOut: Colors.red500,
  cancel: Colors.blueGrey500
};

export const FE_Marker = React.createClass({

  propTypes: {
    access: React.PropTypes.object.isRequired,
    mode: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    const {access, mode, onClick} = this.props;

    const wrappedHandler = (event) => {
      event.data = access;
      onClick(event)
    };

    const iconColor = COLORS[mode];

    return (
      <Marker latlng={[access.lat, access.lng]} onClick={wrappedHandler}>
        <MarkerDivIcon iconSize={[48,48]} iconAnchor={[24,42]}>{this._iconForMode()}</MarkerDivIcon>

        <MarkerLabel className={'access-marker-label'} direction={access.labelOptions.direction} offset={access.labelOptions.offset.toArray()} noHide={true}>
          <Paper onClick={wrappedHandler} zDepth={3} style={{fontSize: '14px', padding: '4px', backgroundColor: Colors.amber50}}>{this.props.access.name}</Paper>
        </MarkerLabel>
      </Marker>
    )
  },

  _iconForMode() {
    const mode = this.props.mode;

    if (mode === 'ready') {
      return <MapsPlace color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'selected') {
      return  <MapsBeenhere color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'putIn') {
      return <MapsBeenhere color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'takeOut') {
      return <MapsBeenhere color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'cancel') {
      return <MapsPlace color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else {
      throw new Error('Unknown AccessMarker mode: ' + mode);
    }
  }
});
