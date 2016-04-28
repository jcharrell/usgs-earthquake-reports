'use strict';

const chai = require('chai');
const expect = chai.expect;
const latitude = require('./../src/lib/filters/latitude');
const mockData = require('./mocks/USGSResponse');

describe('[latitude.js] - Filtering with no latitude restrictions', function filterNoLatitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = latitude(mockData);
	});

	it('should return 184 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(184);
	});
});

describe('[latitude.js] - Filtering with minimum latitude of 40', function filterMinimumLatitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = latitude(mockData, 40);
	});

	it('should return 4 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(1);
	});
});

describe('[latitude.js] - Filtering with maximum latitude of 40', function filterMaximumLatitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = latitude(mockData, null, 40);
	});

	it('should return 183 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(183);
	});
});

describe('[latitude.js] - Filtering with minimum latitude of 38 and maximum latitude of 60', function filterMinumumAndMaximuLatitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = latitude(mockData, 38, 50);
	});

	it('should return 1 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(1);
	});
});
