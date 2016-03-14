'use strict';

Globals.RiverData = new Mongo.Collection('river-data');

if (Meteor.isServer) { // TODO: need to use riverId here
  const d = new Date();
  d.setDate(d.getDate() - 1);
  Meteor.publish('river-data', () => RiverData.find({timestamp: {$gte: d}}));
}