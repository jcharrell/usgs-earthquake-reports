'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = require('./request');
var co = require('co');

module.exports = function reportsRequest(interval) {

	return co(_regenerator2.default.mark(function usgsRequest() {
		var requestOptions, response;
		return _regenerator2.default.wrap(function usgsRequest$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						requestOptions = {
							host: 'earthquake.usgs.gov',
							path: '/earthquakes/feed/v1.0/summary/all_' + interval + '.geojson'
						};
						_context.next = 3;
						return request(requestOptions);

					case 3:
						response = _context.sent;

						if (!(response.statusCode !== 200)) {
							_context.next = 6;
							break;
						}

						throw new Error('Invalid response from the USGS.');

					case 6:
						return _context.abrupt('return', JSON.parse(response.body));

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