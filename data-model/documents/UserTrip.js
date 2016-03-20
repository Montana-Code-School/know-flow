'use strict';

Globals.UserTrip = Astro.Class({
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
      type: 'string',
      simpleValidator: 'required,string'
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
      type: 'string',
      simpleValidator: 'required,string'
    },
    EndTime: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    IdleTime: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    dicharge: {
      type: 'string',
      simpleValidator: 'required,string'
    },
    gageHeight: {
      type: 'string',
      simpleValidator: 'required,string'
    }
  }
});
