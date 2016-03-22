'use strict';

import {UserTrips} from './collections/collections';

export const UserTrip = Astro.Class({
  name: 'UserTrip',
  collection: UserTrips,
  fields: {
    riverId: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    userId: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    tripDate: {
      type: 'date',
      simpleValidator: 'required,date'
    },
    putIn: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    takeOut: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    startTime: {
      type: 'date',
      simpleValidator: 'required,date'
    },
    endTime: {
      type: 'date',
      simpleValidator: 'required,date'
    },
    idleTime: {
      type: 'number',
      simpleValidator: 'required,number'
    },
    dicharge: {
      type: 'number',
      simpleValidator: 'required,number'
    },
    gageHeight: {
      type: 'number',
      simpleValidator: 'required,number'
    }
  }
});
