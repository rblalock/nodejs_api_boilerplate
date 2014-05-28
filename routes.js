/**
 * Establishing the routes / API's for this server
 */

var App = require("./core");
var _ =  require("underscore");

module.exports = function() {
	// TODO Standard system routes here like clearing cache

	// v1 routes
	require("./v1/routes")();
};