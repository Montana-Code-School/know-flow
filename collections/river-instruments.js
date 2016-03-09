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
      type: 'number',
      simpleValidator: 'required,number'
    },
    lng: {
      type: 'number',
      simpleValidator: 'required,number'
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