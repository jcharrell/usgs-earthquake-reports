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

		if(filters.since || filters.until) {
			data = filterByTime(data, filters.since, filters.until);
		}
		return data;
	}).catch(function errorHandler(err) {
		throw (err);
	});
};
