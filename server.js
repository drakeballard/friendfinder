// npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// propertires for express server
var app = express();
var PORT = process.env.PORT || 3000;

// standard code for body-parser so that data send through the server is interpreted easily
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//route files
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
