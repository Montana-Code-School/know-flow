'use strict';

if (Rivers.find().count() === 0) {
  new River({
    _id: '1',
    name: 'Blackfoot'
  }).save();
}
