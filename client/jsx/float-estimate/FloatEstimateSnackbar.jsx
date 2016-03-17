'use strict';

const {Snackbar} = MUI;

Globals.FloatEstimateSnackbar = React.createClass({

  contextTypes: {
    UserAuthentication: React.PropTypes.object
  },

  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  getInitialState: function() {
    return {
      dialogOpen: false
    }
  },

  handleDialogClose: function(open) {
    this.setState({
      dialogOpen: false
    });
  },


  handleActionTouchTap: function () {
    const {loginWithFacebook, loggedIn} = this.context.UserAuthentication;
    if (loggedIn) {
      console.log("in handle action touch tap")
      this.setState({dialogOpen: true});
    } else {
      loginWithFacebook();
    }
  },

  render: function () {
    const selectedCount = this.props.selectedAccesses.length;
    const {servicesReady, loggedIn} = this.context.UserAuthentication;

    let message = '';
    if (selectedCount === 0) {
      message = "Please select a waypoint."
    } else if (selectedCount === 1) {
      message = "Please select another waypoint."
    } else if (selectedCount === 2) {
      message = 'Estimated trip time: 2h 51m.'
    }

    const actionMessage = servicesReady ? (loggedIn ? "Record Trip" : "Login to Record Trip") : null;

    return (
      <div>
        <Snackbar
          open={true}
          message={ <span style={{fontSize: '18px'}}>{message}</span> }
          action={actionMessage}
          bodyStyle={{'textAlign': 'center'}}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={ () => {} } />
        <RecordTripDialog dialogOpen={this.state.dialogOpen} handleDialogClose={this.handleDialogClose}/>
      </div>
    );
  }
});


