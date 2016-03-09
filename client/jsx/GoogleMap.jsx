'use strict';

Globals.GoogleMap = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired,
    children: React.PropTypes.node
  },

  getInitialState() {
    return {
      ready: false
    }
  },

  childContextTypes: {
    map: React.PropTypes.object
  },

  getChildContext() {
    return { map: this.state.map };
  },

  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: ReactDOM.findDOMNode(this),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, (map => {
      console.log('Map is ready!');
      this.setState({
        ready: true,
        map: map
      });
    }));
  },

  componentWillUnmount() {
    if (GoogleMaps.maps[this.props.name]) {
      google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
      delete GoogleMaps.maps[this.props.name];
    }
  },

  render() {
    return <div className="map-container">{this.props.children}</div>;
  }
});
