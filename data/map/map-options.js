'use strict';

import {LatLng, LatLngBounds} from './map';

export const MapOptions = Astro.Class({
  name: 'MapOptions',
  fields: {
    center: {
      type: 'object',
      nested: 'LatLng',
      default: () => new LatLng(),
      simpleValidator: 'required,array'
    },
    maxBounds: {
      type: 'object',
      nested: 'LatLngBounds',
      simpleValidator: 'object'
    }
  }
});

