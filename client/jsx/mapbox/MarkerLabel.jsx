'use strict';

Globals.MarkerLabel = React.createClass({

  contextTypes: {
    marker: React.PropTypes.object.isRequired,
    map: React.PropTypes.object.isRequired
  },

  propTypes: {
    noHide: React.PropTypes.bool,
    offsetX: React.PropTypes.number,
    offsetY: React.PropTypes.number,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      noHide: false,
      offsetX: 12,
      offsetY: -15
    }
  },

  componentWillMount() {
    this._create();
  },

  componentWillUnmount() {
    this._destroy();
  },

  _create() {
    this.context.marker.bindLabel('', {
      offset: [this.props.offsetX, this.props.offsetY],
      className: this.props.className
    });
  },

  _destroy() {
    this.context.marker.unbindLabel();
  },

  render() {
    this.context.marker.setLabelNoHide(this.props.noHide);
    this.context.marker.updateLabelContent(React.renderToString(this.props.children));
    return null;
  }
});
