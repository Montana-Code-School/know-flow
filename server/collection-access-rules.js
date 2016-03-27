'use strict';

import {Rivers, RiverAccesses, RiverInstruments, RiverData, UserTrips} from '../data/collections/collections';

Rivers.permit(['insert', 'update', 'remove']).never().apply();
RiverAccesses.permit(['insert', 'update', 'remove']).never().apply();
RiverInstruments.permit(['insert', 'update', 'remove']).never().apply();
RiverData.permit(['insert', 'update', 'remove']).never().apply();
UserTrips.permit(['insert']).apply();
UserTrips.permit(['update', 'remove']).never().apply();
