
var {
    Styles,
    Paper,
    RaisedButton
    } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

const style = {
  margin: 12,
};


NewButton = React.createClass({
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
            <div>

            <RaisedButton label="Secondary" secondary={true} style={style} />

            </div>
        );
    }
});
