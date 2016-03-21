'use strict';

import {Rivers} from './collections/collections';
import {RiverAccess, RiverInstrument} from './data';
import {MapOptions} from './map/map';

export const River = Astro.Class({
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
    },
    floatEstimateMapOptions: {
      type: 'object',
      nested: 'MapOptions',
      simpleValidator: 'required,object'
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
