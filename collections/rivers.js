'use strict';

Globals.Rivers = new Mongo.Collection('rivers');

Globals.River = Astro.Class({
  name: 'River',
  collection: Rivers,
  fields: {
    name: {
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
    }
  }
});

if (Meteor.isServer) {
  Meteor.publish('rivers', () => Rivers.find({}, {fields: {name:1}}));
}