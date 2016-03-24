'use strict';

import React from 'react';
import {Meteor} from 'meteor/meteor';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import {Accounts} from 'meteor/accounts-base';

export const UserAuthenticationContext = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  getMeteorData: function () {
    const user = Meteor.user();
    return {
      servicesReady: Accounts.loginServicesConfigured(),
      loggedIn: user != null,
      userId: user && user._id,
      username: user && user.profile && user.profile.name,
      profilePicture: user && user.services.facebook && user.services.facebook.picture
    }
  },

  childContextTypes: {
    UserAuthentication: React.PropTypes.object
  },

  getChildContext() {
    const logout = () => Meteor.logout();
    const loginWithFacebook = () => Meteor.loginWithFacebook();

    return {
      UserAuthentication: {...this.data, logout, loginWithFacebook}
    }
  },

  render() {
    return this.props.children;
  }
});