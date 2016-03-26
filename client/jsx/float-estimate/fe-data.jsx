'use strict';

import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import {FE_Pane} from './fe-pane';

export const FE_Data = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    river: React.PropTypes.object.isRequired
  },

  getMeteorData() {
    const {river} = this.props;

    const handle = Meteor.subscribe('float-estimate-data', river._id);
    const data = {};
    data.ready = handle.ready();
    if (data.ready) {
      data.accesses = river.accesses().fetch();
      data.currentDischarge = river.defaultInstrument().currentDischarge();
    }
    return data;
  },

  render() {
    const {river} = this.props;
    const {ready, accesses, currentDischarge} = this.data;
    return <div>{ready ? <FE_Pane river={river} accesses={accesses} currentDischarge={currentDischarge} /> : null}</div>
  }
});