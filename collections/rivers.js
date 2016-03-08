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
  if (Rivers.find().count() === 0) {
    const blackfoot = new River();
    blackfoot.set('name', 'Blackfoot');
    blackfoot.save();
  }

  Meteor.publish('rivers', () => Rivers.find());
}

