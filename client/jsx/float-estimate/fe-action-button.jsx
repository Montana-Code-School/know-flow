'use strict';

import React from 'react';
import {FloatingActionButton} from 'material-ui';
import {AvFiberManualRecord} from 'material-ui/lib/svg-icons';


export const FE_ActionButton = React.createClass({
  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  isButtonDisabled() {
    return this.props.selectedAccesses.length < 2;
  },

  render() {
    return (
      <FloatingActionButton zDepth={3} disabled={this.isButtonDisabled()} style={{position: 'absolute', bottom: '150px', right: '75px'}} >
        <AvFiberManualRecord />
      </FloatingActionButton>
    )
  }
});