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
    const modifiedTheme = this.state.muiTheme;

    modifiedTheme.appBar.color = Colors.blue500;
    console.log(modifiedTheme);

    this.setState({
      muiTheme: modifiedTheme
    });
  },

  render() {
    return <div id="global-theme" >{this.props.children}</div>;
  }
});