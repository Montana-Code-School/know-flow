//'use strict';
//
//Globals.RiverToast = React.createClass({
//
//  propTypes: {
//    selectedAccesses: React.PropTypes.array.isRequired,
//  },
//
//  constructor(props) {
//    super(props);
//    this.state = {
//      open: false,
//    };
//  }
//
//  handleTouchTap = () => {
//    this.setState({
//      open: true,
//    });
//  };
//
//  handleRequestClose = () => {
//    this.setState({
//      open: false,
//    });
//  };
//
//  render() {
//    return (
//      <div>
//        <RaisedButton
//          onTouchTap={this.handleTouchTap}
//          label="Add to my calendar"
//        />
//        <Snackbar
//          open={this.state.open}
//          message="Event added to your calendar"
//          autoHideDuration={4000}
//          onRequestClose={this.handleRequestClose}
//        />
//      </div>
//    );
//  }
//
//
//
//
//  // render() {
//  //   var accessCount = this.props.selectedAccesses.length;
//
//  //   // if (accessCount === 0) {
//  //   //    // Materialize.toast('Please select a starting point', 100000);
//  //   // } else if (accessCount === 1){
//  //   //   Materialize.toast('Please select a ending point', 100000);
//  //   // } else {
//  //   //   Materialize.toast('Lets Go!', 100000);
//  //   // }
//  //   return (
//  //     <div>test</div>
//  //     // <div className="toast" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); top: 0px; opacity: 1;">Please select a starting point</div>;
//  //     )
//  // }
//});
//
