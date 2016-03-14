'use strict';

Globals.AccessMarkerManager = React.createClass({
  propTypes: {
    accesses: React.PropTypes.array.isRequired,
    selectedAccesses: React.PropTypes.array.isRequired,
    accessClickHandler: React.PropTypes.func.isRequired
  },

  render() {
    const selectedAccesses = this.props.selectedAccesses;
    const accesses = this.props.accesses;

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

    const markers = accesses.map((a, i) => <AccessMarker key={a._id} access={a} mode={modes[i]} onClick={this.props.accessClickHandler} /> );
    return <div>{markers}</div>;
  }
});