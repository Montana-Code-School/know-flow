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
    offsetX: {
      type: 'number',
      default: 20,
      simpleValidator: 'required,number'
    },
    offsetY: {
      type: 'number',
      default: 0,
      simpleValidator: 'required,number'
   }
  }
});