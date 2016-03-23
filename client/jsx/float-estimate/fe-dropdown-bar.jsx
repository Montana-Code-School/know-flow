'use strict';

import React from 'react';
import {Paper} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';
import {NavigationArrowForward} from 'material-ui/lib/svg-icons';
import {DropdownBarAvatar} from '../dropdown-bar-avatar';
import * as MarkerIcons from './fe-marker-icons';

export const FE_DropdownBar = React.createClass({

  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  },

  render() {
    const {selectedAccesses} = this.props;
    const {muiTheme} = this.context;
    const appBarHeight = muiTheme.appBar.height;

    if (selectedAccesses.length > 0) {

      let putInAvatar, takeOutAvatar, calculations;
      if (selectedAccesses.length === 1) {
        const access = selectedAccesses[0];
        putInAvatar = <DropdownBarAvatar icon={<MarkerIcons.FE_MarkerIconReady size={'small'} />} label={access.name} />;
        takeOutAvatar = <DropdownBarAvatar icon={<MarkerIcons.FE_MarkerIconUnknown size={'small'} />} label={'Select an access'} />;
      } else {
        const putIn = selectedAccesses[0];
        const takeOut = selectedAccesses[1];
        putInAvatar = <DropdownBarAvatar icon={<MarkerIcons.FE_MarkerIconPutIn size={'small'} />} label={putIn.name} />;
        takeOutAvatar = <DropdownBarAvatar icon={<MarkerIcons.FE_MarkerIconTakeOut size={'small'} />} label={takeOut.name} />;


        calculations = null;
      }
      return (
        <Paper zDepth={2} style={
          {
            position: 'fixed',
            top: appBarHeight,
            left: 0,
            right: 0,
            height: appBarHeight,
            backgroundColor: muiTheme.snackbar.backgroundColor,
            display: 'flex',
            justifyContent: 'center'
          }
        } >
          <div style={{display: 'flex', alignItems: 'center'}}>
            {putInAvatar}
            <NavigationArrowForward color={Colors.blue500} style={{height: 36, width: 36, marginLeft: 5, marginRight: 5}}/>
            {takeOutAvatar}
          </div>
          <div>
            {calculations}
          </div>
        </Paper>
      )
    } else {
      return null;
    }
  }
});