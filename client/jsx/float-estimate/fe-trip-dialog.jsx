'use strict';

import React from 'react';
import {Dialog, FlatButton, TimePicker, Slider, DatePicker} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';
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
    UserAuthentication: React.PropTypes.object.isRequired,
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

    const result = [];
    h !== 0 ? result.push(`${h}h`) : null;
    m !== 0 ? result.push(`${m}m`) : null;
    return result.length > 0 ? result.join(' ') : '0h';
  },

  displayFloatTime() {
    const floatTime = this.state.endTime ? this.convertMS(this.netFloatTime()) : '0h';
    return 'Total Float Time: ' + floatTime;
  },

  displayIdleTime() {
    const idleTime = this.state.idleTime ? this.convertMS(this.state.idleTime) : '0h';
    return 'Idle Time: ' + idleTime;
  },

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.closeDialog} />,
      <FlatButton
        label="Record"
        disabled={this.isSaveDisabled()}
        primary={false}
        onTouchTap={this.saveTrip}
        labelStyle={{color: (this.isSaveDisabled() ? Colors.grey400 : Colors.red400)}} />
    ];

    return (
      <div id='record-trip-dialog'>
        <Dialog
          title={this.displayFloatTime()}
          actions={actions}
          modal={true}
          open={this.props.dialogOpen}
          onRequestClose={this.closeDialog}
          style={{}}
          titleStyle={{backgroundColor: Colors.grey900, paddingTop: 12, paddingBottom: 12, color: Colors.red400}}
          bodyStyle={{}}
        >
          <div className='form-group' style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}} >
            <div className='label'>
              Float Date: &#160;
            </div>
            <div className='form-control'>
              <DatePicker
                hintText="Date of Float"
                value={this.state.date}
                onChange={this.handleDateChange}
              />
            </div>
          </div>
          <div className='form-group' style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <div className='label'>
              Start Time: &#160;
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
          <div className='form-group' style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <div className='label'>
              End Time: &#160;
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
          <br/>
          <div className='form-group'>
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


