'use strict';

const chai = require('chai');
const expect = chai.expect;
const reportRequest = require('./../src/lib/reports-request');

describe('[reports-request.js] - Requesting daily reports', function requestDailyReportsDescribe() {
	let reports;

	before(function* getDailyReportsBefore() {
		let response = yield reportRequest('day');
		reports = response.features;
	});

	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports).to.not.be.empty;
	});
});

describe('[reports-request.js] - Requesting weekly reports', function requestWeeklyReportsDescribe() {
	this.timeout(4000);
	let reports;

	before(function* getWeeklyReportsBefore() {
		let response = yield reportRequest('week');
		reports = response.features;
	});

	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports).to.not.be.empty;
	});
});

describe('[reports-request.js] - Requesting monthly reports', function requestMonthlyReportsDescribe() {
	this.timeout(4000);
	let reports;

	before(function* getMonthlyReportsBefore() {
		let response = yield reportRequest('month');
		reports = response.features;
	});

	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(reports).to.be.instanceof(Array);
		expect(reports).to.not.be.empty;
	});
});
