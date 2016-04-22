'use strict';

const chai = require('chai');
const expect = chai.expect;
const request = require('./../src/lib/request');


const getRequest = function* makeRequest(interval) {
	let requestOptions = {
		host: 'earthquake.usgs.gov',
		path: `/earthquakes/feed/v1.0/summary/all_${interval}.geojson`
	};

	let response = yield request(requestOptions);
	response.body = JSON.parse(response.body);

	return response;
};

describe('[request.js] - Requesting daily reports', function requestDailyReportsDescribe() {
	let response;
	before(function* getDailyReportsBefore() {
		response = yield getRequest('day');
	});

	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(response.statusCode).to.equal(200);
		expect(response.body.features).to.be.instanceof(Array);
		expect(response.body.features).to.not.be.empty;
	});
});

describe('[request.js] - Requesting weekly reports', function requestWeeklyReportsDescribe() {
	this.timeout(4000);
	let response;

	before(function* getDailyReportsBefore() {
		response = yield getRequest('week');
	});


	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(response.statusCode).to.equal(200);
		expect(response.body.features).to.be.instanceof(Array);
		expect(response.body.features).to.not.be.empty;
	});
});

describe('[request.js] - Requesting monthly reports', function requestMonthlyReportsDescribe() {
	this.timeout(4000);
	let response;

	before(function* getDailyReportsBefore() {
		response = yield getRequest('month');
	});


	it('should return an non-empty array of feature objects', function successRecipe() {
		expect(response.statusCode).to.equal(200);
		expect(response.body.features).to.be.instanceof(Array);
		expect(response.body.features).to.not.be.empty;
	});
});
