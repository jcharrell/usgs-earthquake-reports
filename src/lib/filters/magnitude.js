'use strict';

module.exports = function filterByMagnitude(data, min, max) {
	if(!min && !max) {
		return data;
	}

	data = data.filter(function(event) {
		let magnitude = event.properties.mag;

		if(min && max) {
			return magnitude >= min && magnitude <= max
		} else if(min) {
			return magnitude >= min

		} else if(max) {
			return magnitude <= max
		}
	});

	return data;
};
