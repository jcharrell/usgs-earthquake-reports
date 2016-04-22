'use strict';

const chai = require('chai');
const expect = chai.expect;
const USGSReports = require('./../src/main.js');

describe('[main.js] - Requesting daily reports', function requestReportsDescribe() {
	let reports;

	before(function* getDailyReportsBefore() {
		reports = yield USGSReports('day');
	});

	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports).to.not.be.empty;
	});
});

describe('[main.js] - Requesting weekly reports', function requestMonthlyReportsDescribe() {
	this.timeout(4000);
	let reports;

	before(function* getDailyReportsBefore() {
		reports = yield USGSReports('week');
	});

	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports).to.not.be.empty;
	});
});

describe('[main.js] - Requesting monthly reports', function requestMonthlyReportsDescribe() {
	this.timeout(4000);
	let reports;

	before(function* getDailyReportsBefore() {
		reports = yield USGSReports('month');
	});

	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports).to.not.be.empty;
	});
});
