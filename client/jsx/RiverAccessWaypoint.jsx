'use strict';

const PureRenderMixin = React.addons.PureRenderMixin;
const {RaisedButton} = MUI;

Globals.RiverAccessWaypoint = React.createClass({
  mixins: [PureRenderMixin],

  render() {
    return (
      <RaisedButton label="Default" />
    )
  }
});