'use strict';

const chai = require('chai');
const expect = chai.expect;
const filter = require('./../src/lib/reports-filter');
const mockData = require('./mocks/USGSResponse');

describe('[reports-filter.js] - Filtering with magnitude between 0.5 and 1.5 AND time between 2016-04-21T08:30:04 and 2016-04-21T20:45:04', function test() {
	let reports;
	let filterOptions = {
		minMag: 0.5,
		maxMag: 1.5,
		minTime: '2016-04-21T08:30:04',
		maxTime: '2016-04-21T20:45:04'
	};

	before(function* getReportsBefore() {
		reports = yield filter(mockData, filterOptions);
	});

	it('should return 27 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(27);
	});
});

describe('[reports-filter.js] - Filtering with a minimum magnitude of 3.2', function filterMagntiudeAndTimeDescribe() {
	let reports;
	let filterOptions = {
		minMag: 3.2
	};

	before(function* getReportsBefore() {
		reports = yield filter(mockData, filterOptions);
	});

	it('should return 18 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(18);
	});
});


describe('[reports-filter.js] - Filtering with a maximum time of 2016-04-21T09:15:00', function filterMagntiudeAndTimeDescribe() {
	let reports;
	let filterOptions = {
		maxTime: '2016-04-21T09:15:00'
	};

	before(function* getReportsBefore() {
		reports = yield filter(mockData, filterOptions);
	});

	it('should return 123 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(123);
	});
});

describe('[reports-filter.js] - Filtering with a maximum magnitude of 1.5 and minimum time of 2016-04-21T12:30:00', function filterMagntiudeAndTimeDescribe() {
	let reports;
	let filterOptions = {
		maxMag: 1.5,
		minTime: '2016-04-21T12:30:00'
	};

	before(function* getReportsBefore() {
		reports = yield filter(mockData, filterOptions);
	});

	it('should return 20 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(20);
	});
});
