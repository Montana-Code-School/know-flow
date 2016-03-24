'use strict';

import {RiverInstrument, RiverDatum} from '../data';

const NUM_RIVER_DATUM_TO_KEEP = 1000;

const fetchRiverDataFromUSGS = () => {
  RiverInstrument.find().forEach(inst => {
    [RiverInstrument.GAGE_HEIGHT_CODE, RiverInstrument.DISCHARGE_CODE].forEach(paramCode => {
      const params = {
        format: 'json',
        sites: inst.siteId,
        parameterCd: paramCode
      };

      const reply = HTTP.get('http://waterservices.usgs.gov/nwis/iv', { params });

      if (200 === reply.statusCode) {
        try {
          const valueObject = JSON.parse(reply.content).value.timeSeries[0].values[0].value[0];
          if (RiverDatum.find({ timestamp: new Date(valueObject.dateTime), paramCode: paramCode }).count() === 0) {
            new RiverDatum({
              riverInstrumentId: inst._id,
              timestamp: valueObject.dateTime,
              paramCode: paramCode,
              paramValue: valueObject.value
            }).save();
          }
        } catch (Error) {
          console.log('Error parsing river data', Error, reply.content);
        }
      } else {
        console.log('Error fetching river data', reply);
      }
    });
  });
};

const purgeOldRiverData = () => {
  const oldRecords = RiverDatum.find().fetch().sort((a, b) => a.timestamp - b.timestamp).reverse().slice(NUM_RIVER_DATUM_TO_KEEP);
  oldRecords.forEach(datum => datum.remove());
};

Meteor.startup(() => {
  SyncedCron.add({
    name: 'Fetch river data from USGS',
    schedule: (parser) => parser.text('every 15 minutes'),
    job: fetchRiverDataFromUSGS
  });

  SyncedCron.add({
    name: 'Purge old river data',
    schedule: (parser) => parser.text('every 1 day'),
    job: purgeOldRiverData
  });

  SyncedCron.start();

  fetchRiverDataFromUSGS();
});
