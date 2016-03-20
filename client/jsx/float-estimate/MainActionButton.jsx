'use strict';

const {FloatingActionButton, FontIcon} = MUI;


Globals.FloatEstimate.MainActionButton = React.createClass({
  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  isButtonDisabled() {
    return this.props.selectedAccesses.length < 2;
  },

  render() {
    return (
      <FloatingActionButton zDepth={5} disabled={this.isButtonDisabled()} style={{position: 'absolute', bottom: '150px', right: '75px'}} >
        <FontIcon className={'material-icons'} >fiber_manual_record</FontIcon>
      </FloatingActionButton>
    )
  }
});