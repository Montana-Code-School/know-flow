
var {
    AppCanvas,
    Styles
    } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    render: function () {
        return (
            <AppCanvas>

                <MapPaper />

            </AppCanvas>
        );
    }
});
