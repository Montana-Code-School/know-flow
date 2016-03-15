'use strict';

const {Colors} = MUI.Styles;
const {SvgIcons} = MUI.Libs;

const COLORS = {
  ready: Colors.teal500,
  selected: Colors.orange500,
  putIn: Colors.green500,
  takeOut: Colors.red500,
  cancel: Colors.blueGrey500
};

const ICONS = {
  ready: SvgIcons.MapsPlace,
  selected: SvgIcons.MapsBeenHere,
  putIn: SvgIcons.MapsBeenHere,
  takeOut: SvgIcons.MapsBeenHere,
  cancel: SvgIcons.MapsPlace
};

Globals.AccessMarker = React.createClass({

  propTypes: {
    access: React.PropTypes.object.isRequired,
    mode: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    const {access, mode, onClick} = this.props;

    const wrappedHandler = (event) => {
      event.data = access;
      onClick(event)
    };

    const icon = SvgIcons.MapsPlace // ICONS[mode];
    const iconColor = COLORS[mode];

    console.log(icon);

    return (
      <Marker latlng={[access.lat, access.lng]} onClick={wrappedHandler}>
        <MarkerDivIcon iconSize={[48,48]} iconAnchor={[24,42]}>{this._iconForMode()}</MarkerDivIcon>

        <MarkerLabel direction={access.labelSettings.direction} offset={access.labelSettings.offset} noHide={true}>
          <div>{this.props.access.name}</div>
        </MarkerLabel>
      </Marker>
    )
  },

  _iconForMode() {
    const mode = this.props.mode;

    if (mode === 'ready') {
      return <SvgIcons.MapsPlace color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'selected') {
      return  <SvgIcons.MapsBeenhere color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'putIn') {
      return <SvgIcons.MapsBeenhere color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'takeOut') {
      return <SvgIcons.MapsBeenhere color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else if (mode === 'cancel') {
      return <SvgIcons.MapsPlace color={COLORS[mode]} style={{height: 48, width: 48}} />
    } else {
      throw new Error('Unknown AccessMarker mode: ' + mode);
    }
  }
});
