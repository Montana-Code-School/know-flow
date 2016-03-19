'use strict';

const {FloatingActionButton} = MUI;
const {SvgIcons} = MUI.Libs;


Globals.FloatEstimate.MainActionButton = React.createClass({
  propTypes: {
    selectedAccesses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  isButtonDisabled() {
    return this.props.selectedAccesses.length < 2;
  },

  render() {
    return (
      <FloatingActionButton disabled={this.isButtonDisabled()} style={{position: 'absolute', bottom: 0, right: 0, marginRight: '20px', marginBottom: '100px'}} >
        <SvgIcons.AvFiberManualRecord />
      </FloatingActionButton>
    )
  }
});