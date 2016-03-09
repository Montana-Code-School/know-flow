'use strict';

Globals.GoogleMapMarker = React.createClass({

  propTypes: {
    options: React.PropTypes.object.isRequired
  },

  contextTypes: {
    map: React.PropTypes.object
  },

  getInitialState() {
    return {
      marker: null
    }
  },

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
    console.log(nextContext.map != null);
    console.log(nextState.marker == null);

    return nextContext.map != null && nextState.marker == null ? true : false;
  },

  componentDidUpdate(prevProps, prevState, prevContext) {
    console.log('componentDidUpdate');
    console.log(this.context);
    this.createMarker();
  },

  componentWillUnmount() {
    if (this.state.marker) {
      this.state.marker.setMap(null);
    }
  },

  createMarker() {
    this.setState({
      marker: new google.maps.Marker({
        ...this.props.options,
        map: this.context.map.instance
      })
    });
  },

  render() {
    console.log('render');
    return null;
  }
});