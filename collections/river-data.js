'use strict';

Globals.RiverData = new Mongo.Collection('river-data');

Globals.RiverDatum = Astro.Class({
  name: 'RiverDatum',
  collection: RiverData,
  fields: {
    riverInstrumentId: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    timestamp: {
      type: 'date',
      simpleValidator: 'required,date'
    },
    paramCode: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    paramValue: {
      type: 'number',
      simpleValidator: 'required,number'
    }
  }
});

if (Meteor.isServer) { // TODO: need to use riverId here
  const d = new Date();
  d.setDate(d.getDate() - 1);
  Meteor.publish('river-data', () => RiverData.find({timestamp: {$gte: d}}));
}