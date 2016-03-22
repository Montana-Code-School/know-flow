'use strict';

import React from 'react';
import {Dialog, FlatButton, TimePicker, Slider, DatePicker} from 'material-ui';
import {UserTrip} from '../../../data/data';

export const FE_TripDialog = React.createClass({

  propTypes: {
    dialogOpen: React.PropTypes.bool.isRequired,
    handleDialogClose: React.PropTypes.func.isRequired,
    displaySnackbarMessage: React.PropTypes.func.isRequired,
    river: React.PropTypes.object.isRequired,
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  contextTypes: {
    UserAuthentication: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return{
      date: new Date(),
      startTime: null,
      endTime: null,
      idleTime: 0,
      startTimeErrorMessage: null,
      endTimeErrorMessage: null
    }
  },

  closeDialog() {
    this.setState({
      date: new Date(),
      startTime: null,
      endTime: null,
      idleTime: 0,
      startTimeErrorMessage: null,
      endTimeErrorMessage: null
    });
    this.props.handleDialogClose();
  },

  saveTrip() {
    new UserTrip({
      userId: this.context.UserAuthentication.userId,
      riverId: this.props.river._id,
      putIn: this.props.selectedAccesses[0]._id,
      takeOut: this.props.selectedAccesses[1]._id,
      tripDate: this.state.date,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      idleTime: this.state.idleTime,
      dicharge: this.props.river.defaultInstrument().currentDischarge(),
      gageHeight: this.props.river.defaultInstrument().currentGageHeight()
    }).save();

    this.closeDialog();
    this.props.displaySnackbarMessage('trip-saved');
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

  grossFloatTime() {
    if (this.state.endTime && this.state.startTime) {
      return this.state.endTime.getTime() - this.state.startTime.getTime()
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

  getSliderStepValue() {
    if(this.state.startTime && this.state.endTime){
      return 15 / (Math.round(this.grossFloatTime() / 60000));
    } else {
      return 0;
    }
  },

  handleDateChange(_, value) {
    this.setState({
        date: value
      });
  },

  handleIdleTimeChange(_, value) {
    if (value > 1) {
      this.setState({
        idleTime: this.grossFloatTime()
      });
    } else {
    this.setState({
        idleTime: this.grossFloatTime() * value
      });
    }
  },

  handleStartTimeChange(_, time) {
    if (this.state.endTime == null || time < this.state.endTime) {
      this.setState({
        startTime: time,
        startTimeErrorMessage: null,
        idleTime: null
      });
    } else {
      this.refs.startTime.setTime(null);
      this.setState ({
        startTime: null,
        startTimeErrorMessage: 'Start Time must be before End Time',
        idleTime: null
      });
    }
  },

  handleEndTimeChange(_, time) {
    if (this.state.startTime == null || time > this.state.startTime) {
      this.setState({
        endTime: time,
        endTimeErrorMessage: null,
        idleTime: null
      });
    } else {
      this.refs.endTime.setTime(null);
      this.setState ({
        endTime: null,
        endTimeErrorMessage: 'End Time must be after Start Time',
        idleTime: null
      });
    }
  },

  convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return  h + ' hours ' + m + ' minutes';
  },

  displayFloatTime() {
    if(this.state.endTime) {
      return 'Total float time: ' + this.convertMS(this.netFloatTime());
    } else {
      return 'Total float time: 0'
    }
  },

  displayIdleTime() {
    if(this.state.idleTime) {
      return 'Idle time: ' + this.convertMS(this.state.idleTime);
    } else {
      return 'Idle time: 0';
    }
  },

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={true}
        onTouchTap={this.closeDialog} />,
      <FlatButton
        label="Save"
        disabled={this.isSaveDisabled()}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.saveTrip} />
    ];

    return (
      <div id='record-trip-dialog'>
        <Dialog
          title={this.displayFloatTime()}
          actions={actions}
          modal={true}
          open={this.props.dialogOpen}
          onRequestClose={this.closeDialog}
        >
          <div className='form-group'>
            <div className='lable'>
              Float Date:
            </div>
            <div className='form-control'>
              <DatePicker
                hintText="Date of Float"
                value={this.state.date}
                onChange={this.handleDateChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='lable'>
              Float Start Time:
            </div>
            <div className='form-control'>
              <TimePicker
                hintText="Select Start Time"
                errorText={this.state.startTimeErrorMessage}
                pedantic={true}
                ref="startTime"
                value={this.state.startTime}
                onChange={this.handleStartTimeChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='lable'>
              Float End Time:
            </div>
            <div className='form-control'>
              <TimePicker
                hintText="Select End Time"
                errorText={this.state.endTimeErrorMessage}
                pedantic={true}
                ref="endTime"
                value={this.state.endTime}
                onChange={this.handleEndTimeChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='lable'>
              Float Idle Time:
            </div>
            <div className='form-control'>
              <Slider
                value={0}
                step={this.getSliderStepValue()}
                onChange={this.handleIdleTimeChange}
                description={this.displayIdleTime()}
                disabled={this.isSliderDisabled()}
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
})


