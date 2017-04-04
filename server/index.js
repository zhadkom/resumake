var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// creating express app
var app = express();

// add Middleware necessary for REST API`s

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/resume', function(req, res, next) {
	res.send('resume');
	next();
});

// connecting to db
mongoose.connect('mongodb://localhost/resumake');
mongoose.connection.once('open', function() {
	// load the models
	app.models = require('./models/index');

	// load the routes
	var routes = require('./routes');
	_.each(routes, function(controller, route) {
		app.use(route, controller(app, route));
	});

	console.log('Server running on 9000');
	app.listen(9000);
});