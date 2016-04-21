'use strict';

const request = require('./request');
const co = require('co');

module.exports = function reportsRequest(interval) {

	return co(function* usgsRequest() {
		const requestOptions = {
			host: 'earthquake.usgs.gov',
			path: `/earthquakes/feed/v1.0/summary/all_${interval}.geojson`
		};

		let response = yield request(requestOptions);

		if (response.statusCode !== 200) {
			throw new Error('Invalid response from the USGS.')
		}

		return JSON.parse(response.body);
	}).catch(function errorHandler(err) {
		throw (err);
	});
};
