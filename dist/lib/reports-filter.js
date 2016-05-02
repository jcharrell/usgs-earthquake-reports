'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var co = require('co');
var filterByMag = require('./filters/magnitude');
var filterByTime = require('./filters/time');
var filterByLat = require('./filters/latitude');
var filterByLng = require('./filters/longitude');

module.exports = function reportsRequest(data, filters) {
	return co(_regenerator2.default.mark(function usgsRequest() {
		return _regenerator2.default.wrap(function usgsRequest$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (filters) {
							_context.next = 2;
							break;
						}

						return _context.abrupt('return', data);

					case 2:

						if (filters.minMag || filters.maxMag) {
							data = filterByMag(data, filters.minMag, filters.maxMag);
						}

						if (filters.minTime || filters.maxTime) {
							data = filterByTime(data, filters.minTime, filters.maxTime);
						}

						if (filters.minLat || filters.maxLat) {
							data = filterByLat(data, filters.minLat, filters.maxLat);
						}

						if (filters.minLng || filters.maxLng) {
							data = filterByLng(data, filters.minLng, filters.maxLng);
						}

						return _context.abrupt('return', data);

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, usgsRequest, this);
	})).catch(function errorHandler(err) {
		throw err;
	});
};