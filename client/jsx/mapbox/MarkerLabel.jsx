'use strict';

Globals.MarkerLabel = React.createClass({

  contextTypes: {
    marker: React.PropTypes.object.isRequired
  },

  propTypes: {
    noHide: React.PropTypes.bool,
    offsetX: React.PropTypes.number,
    offsetY: React.PropTypes.number,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  componentWillMount() {
    this._create();
  },

  componentWillUnmount() {
    this._destroy();
  },

  _create() {
    const label = new L.Label();
    this.context.marker.bindLabel(label, {
      noHide: this.props.noHide,
      offset: [this.props.offsetX, this.props.offsetY],
      className: this.props.className
    });
    if (this.props.noHide) {
      this.context.marker.showLabel();
    }
    this.setState({label});
  },

  _destroy() {
    this.context.marker.unbindLabel();
    this.context.map.removeLayer(this.state.label);
  },

  render() {
    this.state.label.setContent(React.renderToString(this.props.children));
    return null;
  }
});
