'use strict';

Globals.MainLayout = React.createClass({
  propTypes: {
    header: React.PropTypes.element.isRequired,
    map: React.PropTypes.element.isRequired
  },

  render() {
    return (

      <div>     
        <div className="row" id="header">
          <div className="col-sm-12">{ this.props.header}</div>
        </div>
        <div className="row" id="map">
          <div className="col-sm-12">{ this.props.map }</div>
        </div>
      </div>
    )
  }
});