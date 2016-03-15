'use strict';

Globals.Login = React.createClass({
  
  handleLogin(){
    console.log('hellow  world')
  },

  render() {
    return (
      <Accounts.ui.LoginFormSet redirect={this.handleLogin}/>
    )
  }
});
