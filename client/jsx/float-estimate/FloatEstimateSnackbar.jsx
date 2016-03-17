'use strict';

const {RaisedButton, Snackbar} = MUI;

Globals.FloatEstimateSnackbar = React.createClass({

  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render: function () {
    const selectedCount = this.props.selectedAccesses.length;

    let message = '';
    if (selectedCount === 0) {
      message = "Please select a waypoint."
    } else if (selectedCount === 1) {
      message = "Please select another waypoint."
    } else if (selectedCount === 2) {
      message = 'Estimated trip time: 2h 51m.'
    }

    return (
      <div>
        <Snackbar
          open={true}
          message={ message }
          bodyStyle={{'textAlign': 'center'}}
          onRequestClose={ () => {} }
        />
      </div>
    );
  }
});


