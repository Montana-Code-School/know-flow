'use strict';

import React from 'react';
import {MapsPlace, MapsBeenhere, SocialPublic} from 'material-ui/lib/svg-icons';
import {Colors} from 'material-ui/lib/styles';

const PROP_TYPES = {size: React.PropTypes.oneOf(['small', 'large'])};
const DEFAULT_PROPS = {size: 'large'};
const SIZES= {
  small: { style: { height: 24, width: 24 } },
  large: { style: { height: 48, width: 48 } }
};

export const FE_MarkerIconReady = (props) => <MapsPlace color={Colors.indigo500} style={SIZES[props.size]} />;
FE_MarkerIconReady.propTypes = PROP_TYPES;
FE_MarkerIconReady.defaultProps = DEFAULT_PROPS;

export const FE_MarkerIconSelected = (props) => <MapsBeenhere color={Colors.orange500} style={SIZES[props.size]} />;
FE_MarkerIconSelected.propTypes = PROP_TYPES;
FE_MarkerIconSelected.defaultProps = DEFAULT_PROPS;

export const FE_MarkerIconPutIn = (props) => <MapsBeenhere color={Colors.green500} style={SIZES[props.size]} />;
FE_MarkerIconPutIn.propTypes = PROP_TYPES;
FE_MarkerIconPutIn.defaultProps = DEFAULT_PROPS;

export const FE_MarkerIconTakeOut = (props) => <MapsBeenhere color={Colors.red500} style={SIZES[props.size]} />;
FE_MarkerIconTakeOut.propTypes = PROP_TYPES;
FE_MarkerIconTakeOut.defaultProps = DEFAULT_PROPS;

export const FE_MarkerIconCancel = (props) => <MapsPlace color={Colors.blueGrey500} style={SIZES[props.size]} />;
FE_MarkerIconCancel.propTypes = PROP_TYPES;
FE_MarkerIconCancel.defaultProps = DEFAULT_PROPS;

export const FE_MarkerIconUnknown = (props) => <SocialPublic color={Colors.blueGrey500} style={SIZES[props.size]} />;
FE_MarkerIconUnknown.propTypes = PROP_TYPES;
FE_MarkerIconUnknown.defaultProps = DEFAULT_PROPS;

