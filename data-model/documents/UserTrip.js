'use strict';

Globals.UserTrip = Astro.Class({
  name: 'UserTrip',
  collection: UserTrips,
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
    labelSettings: {
      type: 'object',
      nested: 'LabelSettings',
      default: () => new LabelSettings()
    }
  }
});

tripDate
startTime
EndTime
IdleTime
riverId
userId
dicharge
gageHeight
putIn
takeOut