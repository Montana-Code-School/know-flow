'use strict';

Globals.MainLayout = React.createClass({
  propTypes: {
    header: React.PropTypes.element.isRequired,
    headerDropdown: React.PropTypes.element,
    map: React.PropTypes.element.isRequired
  },

  render() {
 
    return (

      <div className="wrapper full-width-and-height">     
        <div className="row">
          <div className="col s12">{ this.props.header}</div>
        </div>

        <div className="row">
          <div className="col s12">{ this.props.headerDropdown}</div>
        </div>

        <div className="row full-width-and-height">
          <div className="col s12 full-width-and-height">{ this.props.map }</div>
        </div>
      </div>
    )
  }
});