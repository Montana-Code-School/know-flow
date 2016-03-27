'use strict';

import {River, RiverAccess, RiverInstrument} from '../data/data';
import {MapOptions, LabelOptions, LatLng, LatLngBounds} from '../data/map/map';

Meteor.startup(() => {
  if (process.env.NODE_ENV === 'production') {
    River.remove({});
    RiverAccess.remove({});
    RiverInstrument.remove({});
  }

  /*
   *** Rivers ***
   */
  if (River.find().count() === 0) {
    new River({
      _id: '1',
      name: 'Bitterroot',
      defaultInstrumentId: '1',
      floatEstimateMapOptions: new MapOptions({
        center: new LatLng({lat: 46.405, lng: -114.054}),
        maxBounds: new LatLngBounds({
          ne: new LatLng({lat: 46.85, lng: -114.00}),
          sw: new LatLng({lat: 45.90, lng: -114.22})
        })
      })
    }).save();
  }

  /*
   *** River Accesses ***
   */
  if (RiverAccess.find().count() === 0) {
    new RiverAccess({
      _id: '2',
      riverId: '1',
      name: 'Hannon Memorial',
      lat: 45.973509,
      lng: -114.141429,
      riverMile: 82
    }).save();

    new RiverAccess({
      _id: '3',
      riverId: '1',
      name: 'Darby Bridge',
      lat: 46.014901,
      lng: -114.163852,
      riverMile: 78
    }).save();

    new RiverAccess({
      _id: '4',
      riverId: '1',
      name: 'Wally Crawford',
      lat: 46.092454,
      lng: -114.174999,
      riverMile: 72
    }).save();

    new RiverAccess({
      _id: '5',
      riverId: '1',
      name: 'Angler\'s Roost',
      lat: 46.199000,
      lng: -114.168430,
      riverMile: 62
    }).save();

    new RiverAccess({
      _id: '6',
      riverId: '1',
      name: 'Demmons',
      lat: 46.247190,
      lng: -114.177350,
      riverMile: 57
    }).save();

    new RiverAccess({
      _id: '7',
      riverId: '1',
      name: 'Woodside Bridge',
      lat: 46.312819,
      lng: -114.145651,
      riverMile: 52
    }).save();

    new RiverAccess({
      _id: '8',
      riverId: '1',
      name: 'Tucker Crossing',
      lat: 46.370494,
      lng: -114.139643,
      riverMile: 47
    }).save();

    new RiverAccess({
      _id: '9',
      riverId: '1',
      name: 'Bell Crossing',
      lat: 46.443837,
      lng: -114.123483,
      riverMile: 41
    }).save();

    new RiverAccess({
      _id: '10',
      riverId: '1',
      name: 'Stevensville Bridge',
      lat: 46.521206,
      lng: -114.107749,
      riverMile: 34
    }).save();

    new RiverAccess({
      _id: '11',
      riverId: '1',
      name: 'Bass Creek',
      lat: 46.574512,
      lng: -114.090337,
      riverMile: 30,
      labelOptions: new LabelOptions({direction: 'left'})
    }).save();

    new RiverAccess({
      _id: '12',
      riverId: '1',
      name: 'Poker Joe',
      lat: 46.585088,
      lng: -114.066056,
      riverMile: 28
    }).save();

    new RiverAccess({
      _id: '13',
      riverId: '1',
      name: 'Florence Bridge',
      lat: 46.632353,
      lng: -114.050986,
      riverMile: 23
    }).save();

    new RiverAccess({
      _id: '14',
      riverId: '1',
      name: 'Chief Looking Glass',
      lat: 46.661010,
      lng: -114.051362,
      riverMile: 21,
      labelOptions: new LabelOptions({
        direction: 'left',
        offset: new LatLng({lat: -24, lng: 18})
      })
    }).save();
  }

  /*
   *** River Instruments ***
   */
  if (RiverInstrument.find().count() === 0) {
    new RiverInstrument({
      _id: '1',
      riverId: '1',
      siteId: '12350250',
      name: 'Bitterroot River at Bell Crossing nr Victor MT',
      lat: 46.4432,
      lng: - 114.1237667
    }).save();
  }
});
