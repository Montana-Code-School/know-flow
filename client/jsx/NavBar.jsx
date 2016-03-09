//app.jsx
// injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker,
    Paper
    } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

var style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

NavBar = React.createClass({
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
                <AppBar title="izziLab"/>

                <div style={{padding: '80px',}}>
                    <RaisedButton primary={true} label="Tap"/>
                    <br/>
                    <DatePicker hintText="Portrait Dialog"/>
                    <br/>
                    <DatePicker
                        hintText="Landscape Dialog"
                        mode="landscape"/>
                </div>
            </AppCanvas>
        );
    }
});
