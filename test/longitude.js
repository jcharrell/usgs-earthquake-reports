'use strict';

const chai = require('chai');
const expect = chai.expect;
const longitude = require('./../src/lib/filters/longitude');
const mockData = require('./mocks/USGSResponse');

describe('[longitude.js] - Filtering with no longitude restrictions', function filterNoLongitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = longitude(mockData);
	});

	it('should return 184 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(184);
	});
});

describe('[longitude.js] - Filtering with minimum longitude of -92', function filterMinimumLongitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = longitude(mockData, -92);
	});

	it('should return 4 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(1);
	});
});

describe('[longitude.js] - Filtering with maximum longitude of -92', function filterMaximumLongitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = longitude(mockData, null, -92);
	});

	it('should return 183 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(183);
	});
});

describe('[longitude.js] - Filtering with minimum longitude of -195 and maximum longitude of -95', function filterMinumumAndMaximuLongitudeDescribe() {
	let reports;
	before(function getReportsBefore() {
		reports = longitude(mockData, -195, -95);
	});

	it('should return 1 events', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports.length).to.equal(183);
	});
});
