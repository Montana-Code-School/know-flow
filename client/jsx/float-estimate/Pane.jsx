'use strict';

Globals.FloatEstimate.Pane = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    river: React.PropTypes.object.isRequired
  },

  getMeteorData() {
    const accesses = this.props.river.accesses().fetch();
    return {
      accesses: accesses,
      accessesReady: accesses.length > 0
    };
  },

  getInitialState() {
    return {
      selectedAccesses: []
    }
  },

  accessClickHandler(event) {
    const access = event.data;
    const {selectedAccesses} = this.state;
    const comparator = (a, b) => b.riverMile - a.riverMile;

    let newSelectedAccesses = [];
    if (selectedAccesses.length === 0) {
      newSelectedAccesses = [event.data];
    } else if (selectedAccesses.length === 1) {
      if (selectedAccesses[0]._id !== access._id) {
        newSelectedAccesses = [selectedAccesses[0], access].sort(comparator);
      }
    } else if (selectedAccesses.length === 2) {
      if (access.riverMile > selectedAccesses[0].riverMile) {
        newSelectedAccesses = [access, selectedAccesses[1]];
      } else if (access.riverMile < selectedAccesses[1].riverMile) {
        newSelectedAccesses = [selectedAccesses[0], access];
      } else if (access.riverMile < selectedAccesses[0].riverMile && access.riverMile > selectedAccesses[1].riverMile) {
        newSelectedAccesses = [access];
      } else if (access._id === selectedAccesses[0]._id) {
        newSelectedAccesses = [selectedAccesses[1]];
      } else if (access._id === selectedAccesses[1]._id) {
        newSelectedAccesses = [selectedAccesses[0]];
      } else {
        throw new Error('Invalid if/else branch reached while selecting accesses.');
      }
    }

    this.setState({
      selectedAccesses: newSelectedAccesses
    });
  },

  render() {
    if (this.data.accessesReady) {
      const {accesses} = this.data;
      const {selectedAccesses} = this.state;

      return (
        <div id="float-estimate-pane">
          <FloatEstimate.Map accesses={accesses} selectedAccesses={selectedAccesses} accessClickHandler={this.accessClickHandler}/>
          <FloatEstimate.MainActionButton selectedAccesses={selectedAccesses} />
          <FloatEstimate.Snackbar selectedAccesses={selectedAccesses}/>
        </div>
      )
    } else {
      return null;
    }
  }
});