'use strict';

const co = require('co');
const filterByMag = require('./filters/magnitude');
const filterByTime = require('./filters/time');

module.exports = function reportsRequest(data, filters) {
	return co(function* usgsRequest() {
		if(!filters) {
			return data;
		}

		if(filters.minMag || filters.maxMag) {
			data = filterByMag(data, filters.minMag, filters.maxMag);
		}

		if(filters.minTime || filters.maxTime) {
			data = filterByTime(data, filters.minTime, filters.maxTime);
		}
		return data;
	}).catch(function errorHandler(err) {
		throw (err);
	});
};

