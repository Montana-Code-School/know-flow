'use strict';

import React from 'react';
import {FloatingActionButton} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';
import {AvFiberManualRecord} from 'material-ui/lib/svg-icons';

export const FE_ActionButton = React.createClass({
  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onTouchTap: React.PropTypes.func.isRequired
  },

  contextTypes: {
    UserAuthentication: React.PropTypes.object.isRequired
  },

  isButtonDisabled() {
    return !this.context.UserAuthentication.loggedIn || this.props.selectedAccesses.length < 2;
  },

  render() {
    return (
      <FloatingActionButton
        onTouchTap={this.props.onTouchTap}
        backgroundColor={Colors.red500}
        disabledColor={Colors.blueGrey500}
        zDepth={3}
        disabled={this.isButtonDisabled()}
        style={{position: 'fixed', bottom: 100, right: 50}} >
        <AvFiberManualRecord />
      </FloatingActionButton>
    )
  }
});