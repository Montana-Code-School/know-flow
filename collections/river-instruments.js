'use strict';

Globals.RiverInstruments = new Mongo.Collection('river-instruments');

Globals.RiverInstrument = Astro.Class({
  name: 'RiverInstrument',
  collection: RiverInstruments,
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
  },
  relations: {
    data: {
      type: 'many',
      class: 'RiverDatum',
      local: '_id',
      foreign: 'riverInstrumentId'
    }
  }
});