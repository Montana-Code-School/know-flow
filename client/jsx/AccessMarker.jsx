'use strict';

Globals.AccessMarker = React.createClass({

  propTypes: {
   access: React.PropTypes.object.isRequired,
   onClick: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      currentIcon: 'blue'
    }
  },

  handleClick(event) {
    this.props.onClick(this.props.access);
  },

  render() {
    const iconUrl = '/icons/wp-' + this.state.currentIcon + '.png';

    return (
      <Marker latlng={[this.props.access.lat, this.props.access.lng]} onClick={this.handleClick}>
        <MarkerIcon url={iconUrl} height={35} width={35} />

        <MarkerLabel offsetX={20} offsetY={0} noHide={true} >
          <div>{this.props.access.name}</div>
        </MarkerLabel>
        å
        <MarkerPopup options={{className: 'access-popup'}}>
          <ul>
            <li>{this.props.access.name}</li>
            <li>Put-in: {'' + this.props.access.putIn}</li>
            <li>Take-out: {'' + this.props.access.takeOut}</li>
            <li>{this.state.currentIcon}</li>
          </ul>
        </MarkerPopup>
      </Marker>
    )
  }
});