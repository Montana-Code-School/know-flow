'use strict';

Globals.LabelSettings = Astro.Class({
  name: 'LabelSettings',
  fields: {
    direction: {
      type: 'string',
      default: 'right',
      simpleValidator: 'required,string',
      validator: Validators.choice(['left', 'right'])
    },
    offset: {
      type: 'array',
      nested: 'number',
      default: () => [18,-12],
      simpleValidator: 'required,array'
    }
  }
});