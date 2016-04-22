'use strict';

const chai = require('chai');
const expect = chai.expect;
const time = require('./../src/lib/filters/time');
const mockData = require('./mocks/USGSResponse');

describe('[time.js] - Filtering with no time restrictions', function filterNoTimeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = time(mockData);
	});

	it('should return 184 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(184);
	});
});

describe('[time.js] - Filtering with minimum time of 2016-04-21T12:00:00', function filterMinimumTimeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = time(mockData, '2016-04-21T12:00:000');
	});

	it('should return 40 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(40);
	});
});

describe('[time.js] - Filtering with maximum time of 2016-04-21T12:00:00', function filterMaximumTimeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = time(mockData, null, '2016-04-21T12:00:000');
	});

	it('should return 144 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(144);
	});
});

describe('[time.js] - Filtering with time between 2016-04-21T09:00:00 and 2016-04-21T14:00:00', function filterMinimumAndMaximumTimeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = time(mockData, '2016-04-21T09:00:00', '2016-04-21T14:00:000');
	});

	it('should return 40 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(40);
	});
});


