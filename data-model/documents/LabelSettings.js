'use strict';

Globals.LabelSettings = Astro.Class({
  name: 'LabelSettings',
  fields: {
    position: {
      type: 'string',
      simpleValidator: 'required,string',
      validator: Validators.choice(['left', 'right'])
    },
    offsetX: {
      type: 'number',
      default: 0,
      simpleValidator: 'required,number'
    },
    offsetY: {
      type: 'number',
      default: 0,
      simpleValidator: 'required,number'
   }
  }
});