// need to include the path/ routing options in here
var friendsInfo = require('../data/friends.js');

// exporting the modules from friendsInfo
module.exports = function (app) {

// obtaining info from the module
	app.get('/api/friends', function (req, res){
		res.json(friendsInfo);
	});

// sending info to the module friendsInfo
	app.post('/api/friends', function (req, res) {
		friendsData.push(req.body);
	});
}
