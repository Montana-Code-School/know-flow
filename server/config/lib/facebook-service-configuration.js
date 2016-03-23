'use strict';

import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {ServiceConfiguration} from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({});

  const {appId, secret} = Meteor.settings.loginServices.facebook;

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {appId, secret}
    }
  );

  Accounts.onCreateUser(function(options, user) {
    if (user.services && user.services.facebook) {
      user.services.facebook.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    }

    if (options.profile) {
      user.profile = {...user.profile, ...options.profile};
    }

    return user;
  });
});