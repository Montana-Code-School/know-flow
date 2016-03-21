'use strict';

import {RiverAccesses} from './collections/collections';
import {LabelOptions} from './map/map';

export const RiverAccess = Astro.Class({
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
      type: 'number',
      simpleValidator: 'required,number'
    },
    lng: {
      type: 'number',
      simpleValidator: 'required,number'
    },
    riverMile: {
      type: 'number',
      simpleValidator: 'number'
    },
    labelOptions: {
      type: 'object',
      nested: 'LabelOptions',
      default: () => new LabelOptions()
    }
  }
});