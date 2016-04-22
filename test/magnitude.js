'use strict';

const chai = require('chai');
const expect = chai.expect;
const magnitude = require('./../src/lib/filters/magnitude');
const mockData = require('./mocks/USGSResponse');

describe('[magnitude.js] - Filtering with no magnitude restrictions', function filterNoMagnitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = magnitude(mockData);
	});

	it('should return 184 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(184);
	});
});

describe('[magnitude.js] - Filtering with minimum magnitude of 4.7', function filterMinimumMagnitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = magnitude(mockData, 4.7);
	});

	it('should return 4 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(4);
	});
});

describe('[magnitude.js] - Filtering with maximum magnitude of 4.7', function filterMaximumMagnitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = magnitude(mockData, null, 4.7);
	});

	it('should return 180 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(181);
	});
});

describe('[magnitude.js] - Filtering with minimum magnitude of 1.0 and maximum magnitude of 5.0', function filterMinumumAndMaximumMagnitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = magnitude(mockData, 1, 5);
	});

	it('should return 122 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(122);
	});
});
