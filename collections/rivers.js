'use strict';

Globals.Rivers = new Mongo.Collection('rivers');

Globals.River = Astro.Class({
  name: 'River',
  collection: Rivers,
  fields: {
    name: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    defaultInstrumentId: {
      type: 'string',
      simpleValidator: 'required,string'
    }
  },
  relations: {
    accesses: {
      type: 'many',
      class: 'RiverAccess',
      local: '_id',
      foreign: 'riverId'
    },
    instruments: {
      type: 'many',
      class: 'RiverInstrument',
      local: '_id',
      foreign: 'riverId'
    },
    defaultInstrument: {
      type: 'one',
      class: 'RiverInstrument',
      local: 'defaultInstrumentId',
      foreign: '_id'
    }
  }
});

if (Meteor.isServer) {
  Meteor.publish('rivers', () => Rivers.find());
}

