Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: "1518624141779545",
        secret: "5b230c477e9034b1f0e88af48795df7f"
      }
    }
  );
});