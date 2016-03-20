'use strict';

const {AppCanvas} = MUI;

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamNoZXJvc2tlIiwiYSI6ImNpbG1rcTh5aTY4OWV0c2twNjRxNXlpcXEifQ.w4AILHfUs8_KCXQK8cxQSA#11/46.65179699999922/-114.05426000000021/0';

Globals.App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    const river = Rivers.findOne('1');

    return {
      river: river,
      riverReady: river != null
    }
  },

  render() {
    const {river, riverReady} = this.data;

    if (riverReady) {
      return (
        <UserAuthenticationContext>
          <Mapbox.Loader accessToken={MAPBOX_ACCESS_TOKEN} gl={false} plugins={['label']} >
            <AppCanvas>
              <GlobalTheme>
                <Navbar river={river} />
                <FloatEstimate.Pane river={river}/>
              </GlobalTheme>
            </AppCanvas>
          </Mapbox.Loader>
        </UserAuthenticationContext>
      )
    } else {
      return null;
    }
  }
});