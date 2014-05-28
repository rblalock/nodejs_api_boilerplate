/**
 * The core app singleton
 * @class App
 */

var express = require("express");
var bodyParser = require("body-parser");
var config = require("./config");

var App = {
	Express: {},
	Server: {},
	init: function() {
		App.Express = express();

		App.Express.use(bodyParser());

		require("./routes")();

		App.Server = App.Express.listen(config.port, function() {
		    console.log("Listening on port %d", App.Server.address().port);

			console.log("Try the following URLs to demo the API: ");
			console.log("http://localhost:" + App.Server.address().port + "/1/employees?secret_admin=" + config.v1.adminKey);
			console.log("http://localhost:" + App.Server.address().port + "/1/employees/2?secret_admin=" + config.v1.adminKey);
		});
	}
};

module.exports = App;