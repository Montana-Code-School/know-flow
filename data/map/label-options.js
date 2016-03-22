'use strict';

import {LatLng} from './map';

export const LabelOptions = Astro.Class({
  name: 'LabelOptions',
  fields: {
    direction: {
      type: 'string',
      default: 'right',
      simpleValidator: 'required,string',
      validator: Validators.choice(['left', 'right'])
    },
    offset: {
      type: 'object',
      nested: 'LatLng',
      default: () => new LatLng({lat: -18, lng: 18}),
      simpleValidator: 'required,array'
    }
  }
});