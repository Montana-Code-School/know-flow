'use strict';

import React from 'react';
import {FE_Map} from './fe-map';
import {FE_TripDialog} from './fe-trip-dialog';
import {FE_ActionButton} from './fe-action-button';
import {FE_DropdownBar} from './fe-dropdown-bar';
import {FE_Snackbar} from './fe-snackbar';

const RIVER_MPH = 1.65;
const RIVER_BASE_CFS = 950;

export const FE_Pane = React.createClass({

  propTypes: {
    river: React.PropTypes.object.isRequired,
    accesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    currentDischarge: React.PropTypes.number.isRequired
  },

  getInitialState() {
    return {
      tripDialogOpen: false,
      selectedAccesses: [],
      snackbarMessageCode: null
    }
  },

  openTripDialog() {
    this.setState({
      tripDialogOpen: true
    })
  },

  closeTripDialog() {
    this.setState({
      tripDialogOpen: false
    })
  },

  displaySnackbarMessage(messageCode) {
    this.setState({
      snackbarMessageCode: messageCode
    })
  },

  calculateRiverMiles() {
    const {selectedAccesses} = this.state;
    if (selectedAccesses.length < 2) {
      return 0;
    }

    const putIn = selectedAccesses[0];
    const takeOut = selectedAccesses[1];

    return putIn.riverMile - takeOut.riverMile;
  },

  calculateFloatTimeInMinutes() {
    const {selectedAccesses} = this.state;
    const discharge = this.props.currentDischarge;

    if (selectedAccesses.length < 2 || !discharge) {
      return 0;
    }

    const {river} = this.props;
    const putIn = selectedAccesses[0];
    const takeOut = selectedAccesses[1];
    const riverMiles = this.calculateRiverMiles();

    const currentSpeed = RIVER_MPH * discharge / RIVER_BASE_CFS;
    return Math.round(riverMiles / currentSpeed * 60);
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
      selectedAccesses: newSelectedAccesses,
      snackbarMessageCode: null
    });
  },

  render() {
    const {river, accesses, currentDischarge} = this.props;
    const {selectedAccesses} = this.state;

    return (
      <div id="float-estimate-pane">
        <FE_Map mapOptions={river.floatEstimateMapOptions} accesses={accesses} selectedAccesses={selectedAccesses} accessClickHandler={this.accessClickHandler}/>
        <FE_TripDialog selectedAccesses={selectedAccesses} river={river} dialogOpen={this.state.tripDialogOpen} handleDialogClose={this.closeTripDialog} displaySnackbarMessage={this.displaySnackbarMessage} />
        <FE_DropdownBar
          selectedAccesses={selectedAccesses}
          floatTime={this.calculateFloatTimeInMinutes()}
          currentDischarge={currentDischarge}
          riverMiles={this.calculateRiverMiles()}
        />
        <FE_ActionButton selectedAccesses={selectedAccesses} onTouchTap={this.openTripDialog} />
        <FE_Snackbar messageCode={this.state.snackbarMessageCode} selectedAccesses={selectedAccesses}/>
      </div>
    )
  }
});