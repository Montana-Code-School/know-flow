'use strict';

const {Dialog, FlatButton, RaisedButton, DatePicker} = MUI;

Globals.RecordTripDialog = React.createClass({

  propTypes: {
    dialogOpen: React.PropTypes.bool.isRequired,
    handleDialogClose: React.PropTypes.func.isRequired
  },

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleDialogClose} />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.props.dialogOpen}
          onRequestClose={this.props.handleDialogClose}
        >
          Open a Date Picker dialog from within a dialog.
          <DatePicker hintText="Date Picker" />
        </Dialog>
      </div>
    );
  }
})


