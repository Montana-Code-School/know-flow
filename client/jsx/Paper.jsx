
var {
    Styles,
    Paper
    } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

var style = {
  height: 1000,
  width: 1000,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

MapPaper = React.createClass({
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

                <Paper style={style} zDepth={5}>
                <NewButton />

                </Paper>

            </div>
        );
    }
});
