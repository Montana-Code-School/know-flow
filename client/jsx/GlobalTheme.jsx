'use strict';

const {Colors} = MUI.Styles;

Globals.GlobalTheme = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      muiTheme: this.context.muiTheme
    }
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    }
  },

  componentWillMount() {
    const theme = this.state.muiTheme;
    this.configureTheme(theme);
    this.setState({
      muiTheme: theme
    });
  },

  configureTheme(t) {
    t.appBar.color = Colors.blue500;
    t.paper.backgroundColor = Colors.amber50; // Not working currently
  },

  render() {
    return <div id="global-theme" >{this.props.children}</div>;
  }
});