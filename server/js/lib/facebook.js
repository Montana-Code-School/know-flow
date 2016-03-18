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