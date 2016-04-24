'use strict';

// Regular expression to validate the requested date format
const validIntervals = ['day', 'week', 'month'];
const request = require('./lib/reports-request');
const filter = require('./lib/reports-filter');
const co = require('co');

module.exports = function requestReports(interval, filterOptions) {
	return co(function* gatherReports() {
		if(!interval || (interval && validIntervals.indexOf(interval) === -1)) {
			interval = 'day';
		}

		let response = yield request(interval);

		return yield filter(response.features, filterOptions);
	}).catch(function errorHandler(err) {
		console.error(err.stack);
		throw(err);
	});
};
