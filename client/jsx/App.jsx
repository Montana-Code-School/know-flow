'use strict';

Globals.App = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      selectedAccesses: []
    }
  }, 

  getMeteorData: function() { //no freakin crud api you just spoke to the server
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
      const headerDropdown = this.state.showHeaderDropdown ? <HeaderDropdown /> : null;
      return(
      <div className="wrapper full-width-and-height">     
        <div className="row">
          <div className="col s12"><Navbar /></div>
        </div>

        <div className="row">
          <div className="col s12">{ this.props.headerDropdown}</div>
        </div>

        <div className="row full-width-and-height">
          <div className="col s12 full-width-and-height"><RiverMap river={ this.data.river } selectedAccesses={this.state.selectedAccesses} accessClickHandler={this.accessClickHandler} /></div>
          <RiverToast selectedAccesses={this.state.selectedAccesses}/>
        </div>
      </div>)
    } else {
      return null;
    }
  }
});