'use strict';

Globals.Rivers = new Mongo.Collection('rivers');

if (Meteor.isServer) {
  Meteor.publish('rivers', () => Rivers.find());
}

