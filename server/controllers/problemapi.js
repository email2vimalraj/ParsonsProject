var _ = require('lodash');
var User = require('../models/user');
var passport = require('passport');
var ParsonsProblem = require('../models/parsonsproblem');
var Feedback = require('../models/feedback');
var UserProblemPair = require('../models/userproblempair');

//POST GET API METHODS for ParsonsProblems

exports.createProblem = function(req, res, next) {
	console.log(req.body);
	res.json(req.body);
};