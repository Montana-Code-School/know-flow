'use strict';

import {Meteor} from 'meteor/meteor';
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
});