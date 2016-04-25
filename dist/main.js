'use strict';

// Regular expression to validate the requested date format

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validIntervals = ['day', 'week', 'month'];
var request = require('./lib/reports-request');
var filter = require('./lib/reports-filter');
var co = require('co');

module.exports = function requestReports(interval, filterOptions) {
	return co(_regenerator2.default.mark(function gatherReports() {
		var response;
		return _regenerator2.default.wrap(function gatherReports$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (!interval || interval && validIntervals.indexOf(interval) === -1) {
							interval = 'day';
						}

						_context.next = 3;
						return request(interval);

					case 3:
						response = _context.sent;
						_context.next = 6;
						return filter(response.features, filterOptions);

					case 6:
						return _context.abrupt('return', _context.sent);

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, gatherReports, this);
	})).catch(function errorHandler(err) {
		console.error(err.stack);
		throw err;
	});
};