'use strict';

Globals.RiverData = Meteor.Collection('river-data');

Globals.RiverDatum = Astro.Class({
  name: 'RiverDatum',
  collection: RiverData,
  fields: {
    riverInstrumentId: {
      type: 'string',
      simpleValidator: 'required, string'
    },
    timestamp: {
      type: 'date',
      simpleValidator: 'required, date'
    },
    cfm: {
      type: 'number',
      simpleValidator: 'required, number'
    }
  }
});

if (Meteor.isServer) {
  const d = new Date();
  d.setDate(d.getDate() - 2);
  Meteor.publish('river-data', () => RiverData.find({timestamp: {$gte: d}}));
}