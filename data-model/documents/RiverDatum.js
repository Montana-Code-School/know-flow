'use strict';

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