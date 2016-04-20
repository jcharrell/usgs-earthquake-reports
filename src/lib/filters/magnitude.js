'use strict';

module.exports = function filterByMagnitude(data, min, max) {
	data = data.filter(function(event) {
		let magnatude = event.properties.mag;

		if(min && max) {
			return magnatude >= min && magnatude <= max
		} else if(min) {
			return magnatude >= min

		} else if(max) {
			return magnatude <= max
		}
	});

	return data;
};
