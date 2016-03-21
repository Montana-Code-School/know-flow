'use strict';

import React from 'react';
import {Paper} from 'material-ui';
import {PopoverAnimationFromTop} from 'material-ui/lib/popover/popover-animation-from-top';

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
      return (
        <Paper zDepth={0} style={
          {
            position: 'fixed',
            top: appBarHeight,
            left: 0,
            right: 0,
            height: appBarHeight,
            backgroundColor: muiTheme.snackbar.backgroundColor
          }
        } >
          Hello World!!!
        </Paper>
      )
    } else {
      return null;
    }
  }
});