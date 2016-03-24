'use strict';

import React from 'react';
import {Avatar} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';

export const DropdownBarAvatar = React.createClass({

  propTypes: {
    icon: React.PropTypes.node.isRequired,
    label: React.PropTypes.string.isRequired
  },

  render() {
    const {icon, label} = this.props;

    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Avatar icon={icon} size={33} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '8px'}} />
        <span style={{color: Colors.grey500}}>{label}</span>
      </div>
    )
  }
});