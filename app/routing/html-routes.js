// this is where the path file goes
var path = require('path');

// seting a module export section that will switch back from home and the survey section
module.exports = function(app) {

	// the home directory
	app.get('/home', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	//the surve directory
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//goes back to the home
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

};
