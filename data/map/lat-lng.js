'use strict';

export const LatLng = Astro.Class({
  name: 'LatLng',
  fields: {
    lat: {
      type: 'number',
      default: 0,
      simpleValidator: 'required,number'
    },
    lng: {
      type: 'number',
      default: 0,
      simpleValidator: 'required,number'
    }
  },
  methods: {
    toArray() {
      return [this.lat, this.lng];
    }
  }
});