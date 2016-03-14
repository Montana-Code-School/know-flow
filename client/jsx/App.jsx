'use strict';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0';

Globals.App = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      selectedAccesses: []
    }
  },

  getMeteorData: function () { //no freakin crud api you just spoke to the server
    const river = Rivers.findOne('1');

    return {
      river: river,
      riverReady: river != null
    }
  },

  accessClickHandler(event) {
    const access = event.data;
    const selectedAccesses = this.state.selectedAccesses;
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
    if (this.data.riverReady) {
      return (
        <MapboxLoader accessToken={MAPBOX_ACCESS_TOKEN} gl={true} plugins={['label']} >
          <div id="wrapper">
            <Navbar />
            <FloatEstimateMap river={ this.data.river } selectedAccesses={this.state.selectedAccesses}
                      accessClickHandler={this.accessClickHandler}/>
            <RiverSnackbar selectedAccesses={this.state.selectedAccesses}/>
          </div>
        </MapboxLoader>
      )
    } else {
      return null;
    }
  }
});