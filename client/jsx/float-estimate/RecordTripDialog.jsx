'use strict';

const {Dialog, FlatButton, TimePicker, Slider} = MUI;

Globals.RecordTripDialog = React.createClass({

  propTypes: {
    dialogOpen: React.PropTypes.bool.isRequired,
    handleDialogClose: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return{
      startTime: null,
      endTime: null,
      idleTime: null
    }
  },

  isSaveDisabled() {
    return this.state.startTime == null || this.state.endTime == null;
  },

  isSliderDisabled() {
    return this.state.startTime == null || this.state.endTime == null;
  },

  handleIdleTimeChange(_, value) {
    this.state.endTime - this.state.startTime
    console.log(value)
  },

  handleStartTimeChange(_, time) {
    console.log(time.getTime())
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
          title="Record a Trip"
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
            defaultTime={this.state.startTime}
            onChange={this.handleStartTimeChange} 
          />
          <TimePicker 
            hintText="Float End Time" 
            pedantic={true}
            ref="endTime" 
            defaultTime={this.state.endTime}
            onChange={this.handleEndTimeChange} 
          />
          <br />
          <Slider 
            value={0}
            onChange={this.handleIdleTimeChange}
            description="Idle time: 20min"
            disabled={this.isSliderDisabled()}
          />
        </Dialog>
      </div>
    );
  }
})


