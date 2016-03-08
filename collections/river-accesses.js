'use strict';

Globals.RiverAccesses = new Mongo.Collection('river-accesses');

Globals.RiverAccess = Astro.Class({
  name: 'RiverAccess',
  collection: RiverAccesses,
  fields: {
    riverId: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    name: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    lat: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    lon: {
      type: 'string',
      simpleValidator: 'required,string'
    }
  }
});