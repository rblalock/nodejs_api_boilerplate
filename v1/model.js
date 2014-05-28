/**
 * Stubbed model / service layer.
 *
 * This is where you'd handle model logic, mashing together things, or whatever else
 * related to your data.
 *
 * @class Model
 * @version 1
 */

var request = require("request");
var _ =  require("underscore");
var moment = require("moment");
var config = require("../config").v1;
var dataSource = require("../sampleDataSource");

/**
 * The model object
 * @constructor
 */
function Model() {
	var that = this;

	/**
	 * Cache instance
	 * @type {Object}
	 */
	this.cache = require("./cache")(config.cacheEnabled, config.cacheDuration);

	/**
	 * Retrieve a data set
	 * @param {Object} _object
	 * @param {Function} _callback
	 */
	this.retrieve = function(_object, _callback) {
		// HTTP requests, data mashing, any type of model logic would go here
		var response = dataSource[_object].data;

		_callback({
			success: true,
			results: response
		});
	};

	/**
	 * Query a data set
	 * @param {Object} _object
	 * @param {Object} _query
	 * @param {Function} _callback
	 */
	this.query = function(_object, _query, _callback) {
		// HTTP requests, data mashing, any type of model logic would go here
		var response = dataSource.query(_object, _query);

		_callback({
			success: true,
			results: response
		});
	};
}

module.exports = function() {
	return new Model();
};