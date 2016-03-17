'use strict';

Globals.UserAuthenticationContext = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  getMeteorData: function () {
    return {
      servicesReady: Accounts.loginServicesConfigured(),
      loggedIn: Meteor.userId() != null,
      username: Meteor.user() && Meteor.user().profile && Meteor.user().profile.name
    }
  },

  childContextTypes: {
    UserAuthentication: React.PropTypes.object
  },

  getChildContext() {
    const {servicesReady, loggedIn, username} = this.data;
    const logout = () => Meteor.logout();
    const loginWithFacebook = () => Meteor.loginWithFacebook();

    return {
      UserAuthentication: {servicesReady, loggedIn, username, logout, loginWithFacebook}
    }
  },

  render() {
    return this.props.children;
  }
});