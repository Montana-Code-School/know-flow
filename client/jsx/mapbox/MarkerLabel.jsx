'use strict';

Globals.MarkerLabel = React.createClass({

  contextTypes: {
    marker: React.PropTypes.object.isRequired
  },

  propTypes: {
    noHide: React.PropTypes.bool,
    direction: React.PropTypes.string,
    offset: React.PropTypes.arrayOf(React.PropTypes.number),
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      noHide: false,
      direction: 'right',
      offsetX: 12,
      offsetY: -15,
      className: ''
    }
  },

  componentWillMount() {
    this._create();
  },

  componentWillUnmount() {
    this._destroy();
  },

  _create() {
    const {children, direction, offset, className, noHide} = this.props;
    const {marker} = this.context;

    marker.bindLabel(React.renderToString(children), {direction, offset, className, noHide});

    if (noHide) {
      marker.showLabel();
    }
  },

  _destroy() {
    this.context.marker.unbindLabel();
  },

  render() {
    const {children} = this.props;
    const {marker} = this.context;

    marker.updateLabelContent(React.renderToString(children));
    return null;
  }
});
