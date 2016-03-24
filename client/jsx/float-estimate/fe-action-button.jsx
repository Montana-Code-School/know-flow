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
      <div style={{position: 'fixed', bottom: 80, right: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 20}}>
        <FloatingActionButton
          onTouchTap={this.props.onTouchTap}
          backgroundColor={Colors.red500}
          disabledColor={Colors.blueGrey500}
          zDepth={3}
          disabled={this.isButtonDisabled()}
        >
          <AvFiberManualRecord />
        </FloatingActionButton>
        <div style={{paddingTop: 2, color: this.isButtonDisabled() ? Colors.blueGrey500 : Colors.red500}}>Record</div>
      </div>
    )
  }
});