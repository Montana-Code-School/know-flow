'use strict';

var {
    RaisedButton,
    Snackbar
    } = MUI;

Globals.RiverSnackbar = React.createClass({

    propTypes: {
            selectedAccesses: React.PropTypes.array.isRequired,
    },

    render: function () {
       var toggle =  this.props.selectedAccesses.length
       var message = ''
       console.log(toggle)

       if (toggle === 0 ) {
        message = "Please select a waypoint"
       } else if (toggle === 1){
        message = "Please select endpoint"
       }
        return (
              <div>
                <Snackbar
                open={true}
                message={ message }
                onRequestClose={ () => {} } />
              </div>
        );
    }
});


