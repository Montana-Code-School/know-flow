'use strict';

Globals.RiverHeader = React.createClass({
  propTypes: {
    river: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>...</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    )
  }
});