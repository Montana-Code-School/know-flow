'use strict';

Globals.AccessMarker = React.createClass({

  propTypes: {
   access: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      currentIcon: 'blue'
    }
  },

  handleClick() {
    const newIcon = this.state.currentIcon === 'blue' ? 'green' : 'blue';
    this.setState({
      currentIcon: newIcon
    });
  },

  render() {
    const iconUrl = '/icons/wp-' + this.state.currentIcon + '.png';

    return (
      <Marker latlng={[this.props.access.lat, this.props.access.lng]} onClick={this.handleClick}>
          <MarkerIcon url={iconUrl} height={25} width={25} />

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