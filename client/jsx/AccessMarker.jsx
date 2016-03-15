'use strict';

const {Colors} = MUI.Styles;

const COLORS = {
  ready: Colors.blue500,
  selected: Colors.orange500,
  putIn: Colors.green500,
  takeOut: Colors.red500,
  cancel: Colors.blueGrey500
};

Globals.AccessMarker = React.createClass({

  propTypes: {
    access: React.PropTypes.object.isRequired,
    mode: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    const {SvgIcons} = MUI.Libs;
    const {access, mode, onClick} = this.props;

    const wrappedHandler = (event) => {
      event.data = access;
      onClick(event)
    };

    return (
      <Marker latlng={[access.lat, access.lng]} onClick={wrappedHandler}>
        <MarkerDivIcon iconSize={[48,48]} iconAnchor={[24,42]}><SvgIcons.MapsPlace color={COLORS[mode]} style={{height: 48, width: 48}} /></MarkerDivIcon>

        <MarkerLabel direction={access.labelSettings.direction} offset={access.labelSettings.offset} noHide={true}>
          <div>{this.props.access.name}</div>
        </MarkerLabel>
      </Marker>
    )
  }
});
