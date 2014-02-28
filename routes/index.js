
var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	// var projects = {'grid': false};
  	projects.grid = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res) {
  	// var projects = {'grid': true};
  	projects.grid = true;
	res.render('index', projects);
}