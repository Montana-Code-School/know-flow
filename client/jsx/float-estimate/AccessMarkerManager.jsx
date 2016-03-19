'use strict';

Globals.FloatEstimate.AccessMarkerManager = React.createClass({
  propTypes: {
    accesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    accessClickHandler: React.PropTypes.func.isRequired
  },

  render() {
    const {accesses, selectedAccesses} = this.props;

    const modes = accesses.map(access => {
      if (selectedAccesses.length === 0) {
        return 'ready';
      } else if (selectedAccesses.length === 1) {
        if (access._id === selectedAccesses[0]._id) {
          return 'selected';
        } else {
          return 'ready';
        }
      } else if (selectedAccesses.length === 2) {
        selectedAccesses.sort((a, b) => b.riverMile - a.riverMile);

        if (access._id === selectedAccesses[0]._id) {
          return 'putIn';
        } else if (access._id === selectedAccesses[1]._id) {
          return 'takeOut';
        } else if (access.riverMile > selectedAccesses[0].riverMile || access.riverMile < selectedAccesses[1].riverMile) {
          return 'ready';
        } else {
          return 'cancel';
        }
      } else {
        throw new Error('Invalid number of accesses selected');
      }
    });

    const markers = accesses.map((a, i) => <FloatEstimate.AccessMarker key={a._id} access={a} mode={modes[i]} onClick={this.props.accessClickHandler} /> );
    return <div id="access-marker-manager">{markers}</div>;
  }
});