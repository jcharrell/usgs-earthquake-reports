'use strict';

const moment = require('moment');
const timeFormat = 'YYYY-MM-DDTHH:mm:ss';

function generateTimestamp(time) {
	if(time) {
		return moment.utc(time, timeFormat).format('x');
	} else {
		return moment.utc().format('x');
	}
}

module.exports = function filterByTime(data, min, max) {
	let beginTimestamp, endTimestamp;

	// Set the begin and end timestamps, if they are to be used
	if(min) {
		beginTimestamp = generateTimestamp(min);
	}
	if(min) {
		endTimestamp = generateTimestamp(max);
	}

	// Loop through each event and keep those that adhere to the requested time ranges
	data = data.filter(function(event) {
		let eventTime = event.properties.time;

		if(beginTimestamp && endTimestamp) {
			return eventTime >= beginTimestamp && eventTime <= endTimestamp;
		} else if(beginTimestamp) {
			return eventTime >= beginTimestamp;
		} else if(endTime) {
			return endTimestamp <= endTimestamp;
		}
	});

	return data
};
