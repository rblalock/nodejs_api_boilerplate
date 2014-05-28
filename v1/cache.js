/**
 * In-Memory Caching
 * @class Cache
 *
 * Structure looks like this:
 *      currentCache: {
 *          "http://api.yourservername.com/someRoute": {
 *              data: {},
 *              cacheDuration: 3600000,
 *              cacheTimestamp: Date.getTime()
 *          }
 *      }
 */

function Cache(_cacheData, _cacheDuration) {
	var that = this;
	var currentCache = {};
	var cacheTime = _cacheDuration || 3600000;

	this.read = function (_url) {
		if(!_cacheData) { return false; }

		var cacheName = _url.replace(/[^\w\d]/g, "");
		var isCached = false;

		if((currentCache[cacheName])) {
			var timestamp = currentCache[cacheName].cacheTimestamp;
			var difference = (new Date()).getTime() - timestamp;

			if(difference && difference < cacheTime) {
				isCached = true;
				console.log("Reading from cache");
			}
		}

		return (isCached) ? currentCache[cacheName].data : false;
	};

	this.write = function (_url, _data) {
		if(!_cacheData) { return false; }

		var cacheName = _url.replace(/[^\w\d]/g, "");
		currentCache[cacheName] = {
			data: _data,
			cacheDuration: cacheTime,
			cacheTimestamp: (new Date()).getTime()
		};
	};

	this.clear = function () {
		currentCache = null;
		currentCache = {};
	};

	// Set the timer for clearing this cache
	var timer = setInterval(that.clear, cacheTime);
}

module.exports = function(_cacheData) {
	return new Cache(_cacheData);
};