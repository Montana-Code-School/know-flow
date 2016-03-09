'use strict';

Globals.JayLayout = React.createClass({
  render() {
    return (
      <div>
        <div><h1>Hello Jay's Layout</h1></div>

        <GoogleMap center={ {lat: 59.938043, lng: 30.337157} } zoom={9} bootstrapURLKeys={ {key: 'AIzaSyAO4J0Nadxs1vCVCkxnaByhwD1-kk7Z_OQ'} }>
          <RiverAccessWaypoint />
        </GoogleMap>
      </div>
    )
  }
});