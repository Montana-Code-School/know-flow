'use strict';

Globals.AccessMarker = React.createClass({

  propTypes: {
    access: React.PropTypes.object.isRequired,
    mode: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render() {
    const {access, onClick} = this.props;

    const wrappedHandler = (event) => {
      event.data = access;
      onClick(event)
    };

    return (
      <Marker latlng={[access.lat, access.lng]} onClick={wrappedHandler}>
        <MarkerIcon url={this._modeToImgUrl()} height={35} width={35}/>

        <MarkerLabel direction={access.labelSettings.direction} offsetX={access.labelSettings.offsetX} offsetY={access.labelSettings.offsetY} noHide={true}>
          <div>{this.props.access.name}</div>
        </MarkerLabel>
      </Marker>
    )
  },

  _modeToImgUrl() {
    let iconColor;
    switch (this.props.mode) {
      case 'ready':
        iconColor = 'blue';
        break;
      case 'selected':
        iconColor = 'yellow';
        break;
      case 'putIn':
        iconColor = 'green';
        break;
      case 'takeOut':
        iconColor = 'red';
        break;
      case 'cancel':
        iconColor = 'grey';
        break;
      default:
        throw new Error('Unknown AccessMarker mode');
    }
    return '/icons/wp-' + iconColor + '.png';
  }
});