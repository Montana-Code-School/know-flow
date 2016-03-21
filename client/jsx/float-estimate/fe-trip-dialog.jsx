'use strict';

import React from 'react';
import {Dialog, FlatButton, TimePicker, Slider} from 'material-ui';

export const FE_TripDialog = React.createClass({

  propTypes: {
    dialogOpen: React.PropTypes.bool.isRequired,
    handleDialogClose: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return{
      startTime: null,
      endTime: null,
      idleTime: 0
    }
  },

  isEndTimeDisabled() {
    return this.state.startTime == null || this.state.endTime == null;
  },

  isSliderDisabled() {
    return this.state.startTime == null || this.state.endTime == null;
  },

  isSaveDisabled() {
    return this.state.startTime == null || this.state.endTime == null;
  },

  getSliderStepValue() {
    if(this.state.startTime && this.state.endTime){
      return (10 / this.grossFloatTime());
    } else {
      return 0;
    }
  },

  grossFloatTime() {
    if (this.state.endTime && this.state.startTime) {
      return (this.state.endTime.getTime() - this.state.startTime.getTime()) / 60000;
    } else {
      return null;
    }
  },

  netFloatTime() {
    if (this.grossFloatTime() && this.state.idleTime) {
      return this.grossFloatTime() - this.state.idleTime;
    } else if (this.grossFloatTime()) {
      return this.grossFloatTime();
    } else {
      return 0;
    }
  },

  displayFloatTime() {
    return 'Total float time: ' + this.netFloatTime() / 60;
  },

  displayIdleTime() {
    if(this.state.idleTime) {
      return 'Idle time: ' + this.state.idleTime;
    } else {
      return 'Idle time: 0';
    }
  },

  handleIdleTimeChange(_, value) {
    console.log('slider value')
    console.log(value)
    this.setState({
        idleTime: Math.round(this.grossFloatTime() * value)
      });
    console.log('idle time')
    console.log(this.state)
  },

  handleStartTimeChange(_, time) {
    console.log('start time change')
    if (this.state.endTime == null || time < this.state.endTime) {
      this.setState({
        startTime: time
      });
    } else {
      this.refs.startTime.setTime(null);
      this.setState ({
        startTime: null
      });
    }
  },

  handleEndTimeChange(_, time) {
    if (this.state.startTime == null || time > this.state.startTime) {
      this.setState({
        endTime: time
      });
    } else {
      this.refs.endTime.setTime(null);
      this.setState ({
        endTime: null
      });
    }
  },

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={true}
        onTouchTap={this.props.handleDialogClose} />,
      <FlatButton
        label="Save"
        disabled={this.isSaveDisabled()}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleDialogClose} />
    ];

    return (
      <div>
        <Dialog
          title={this.displayFloatTime()}
          actions={actions}
          modal={true}
          open={this.props.dialogOpen}
          onRequestClose={this.props.handleDialogClose}
        >
          Please select your start, end & idle time below.
          <TimePicker
            hintText="Float Start Time"
            pedantic={true}
            ref="startTime"
            value={this.state.startTime}
            onChange={this.handleStartTimeChange}
          />
          <TimePicker
            hintText="Float End Time"
            pedantic={true}
            ref="endTime"
            value={this.state.endTime}
            onChange={this.handleEndTimeChange}
          />
          <br />
          <Slider
            value={0}
            step={this.getSliderStepValue()}
            onChange={this.handleIdleTimeChange}
            description={this.displayIdleTime()}
            disabled={this.isSliderDisabled()}
          />
        </Dialog>
      </div>
    );
  }
})


