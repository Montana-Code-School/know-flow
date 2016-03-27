'use strict';

import {Meteor} from 'meteor/meteor';
import {Rivers, RiverAccesses, RiverInstruments, RiverData} from '../data/collections/collections';

Meteor.publish('rivers', () => Rivers.find({}));

Meteor.publish('float-estimate-data', riverId => {
  check(riverId, String);

  const cursors = [];
  cursors.push(RiverAccesses.find({ riverId }));
  cursors.push(RiverInstruments.find({ riverId }));

  const river = Rivers.findOne(riverId);
  cursors.push(RiverData.find({ riverInstrumentId: river.defaultInstrument()._id }));

  return cursors;
});

Meteor.publish(null, function() {
  return Meteor.users.find({ _id: this.userId }, { fields: { 'services.facebook': 1 } })
});
