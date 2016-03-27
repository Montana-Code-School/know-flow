'use strict';

import {Meteor} from 'meteor/meteor';

export const Rivers = new Mongo.Collection('rivers');

export const RiverAccesses = new Mongo.Collection('river-accesses');

export const RiverInstruments = new Mongo.Collection('river-instruments');

export const RiverData= new Mongo.Collection('river-data');

export const UserTrips = new Mongo.Collection('user-trips');

if (Meteor.isServer) {
  Meteor.publish('rivers', () => Rivers.find({}));

  Meteor.publish('float-estimate-data', riverId => {
    check(riverId, String);

    const cursors = [];
    cursors.push(RiverAccesses.find({ riverId }));
    cursors.push(RiverInstruments.find({ riverId }));

    const river = Rivers.findOne(riverId);
    cursors.push(RiverData.find({ riverInstrumentId: river.defaultInstrument()._id }));

    return cursors;
  });

  Meteor.publish(null, function() {
    return Meteor.users.find({ _id: this.userId }, { fields: { 'services.facebook': 1 } })
  });

  Rivers.permit(['insert', 'update', 'remove']).never().apply();
  RiverAccesses.permit(['insert', 'update', 'remove']).never().apply();
  RiverInstruments.permit(['insert', 'update', 'remove']).never().apply();
  RiverData.permit(['insert', 'update', 'remove']).never().apply();
  UserTrips.permit(['insert']).apply();
  UserTrips.permit(['update', 'remove']).never().apply();
}