# usgs-earthquake-reports

> This is a library that parses and returns USGS [earthquake reports](http://earthquake.usgs.gov/earthquakes/).

## Install

```
$ npm install usgs-earthquake-reports
```


## Usage

```js
var earthquakeReports = require('usgs-earthquake-reports');

// Request all events with a magnitude between 0.5 and 1.5 between the specified times 
var filterOptions = {
	minMag: 0.5,
	maxMag: 1.5,
	minTime: '2016-04-17T20:30:04',
	maxTime: '2016-04-17T20:45:04'
};

earthquakeReports('day', filterOptions).then(function usgsResponse(data) {
	console.log(data);
}).catch(function errorHandler(err) {
	console.log(err);
});
```


## API

### earthquakeReports([timeFrame, filterOptions])


### timeFrame(optional)
- Type: `string`
- Default: `day` 
- Valid Options: `hour | day | week | month`
- Note: All USGS products are updated every 5 minutes, with the exception of monthly data which 
is updated in 15 minute intervals.  It is highly suggested that requested data is cached to reduce
the load put on the USGS servers.


### filterOptions (optional)

- Type: `object`
- Note: Defines filters for the returned data.  Filters do not need to be combined with counterpart options.
- Properties:
	- `minMag`  
		* Type: `decimal`
		* Defines the minimum magnitude event to return
	- `minMag`
		* Type: `decimal`
		* Defines the maximum magnitude event to return
	- `minTime`
		* Type: `string`
		* Format: `YYYY-MM-DDTHH:mm:ss`, e.g. 2016-01-30T00:00:00
		* Defines the oldest event to return in UTC
	- `maxTime`
		* Type: `string`
		* Format: `YYYY-MM-DDTHH:mm:ss`, e.g. 2016-01-30T23:59:59
		* Defines the most recent event to return in UTC

## License

[ISC](https://github.com/jcharrell/usgs-earthquake-reports/blob/master/LICENSE) © [Chris Harrell](https://github.com/jcharrell)
