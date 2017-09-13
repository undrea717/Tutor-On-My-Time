var db = require("../models");
// var express = require("express");
// var router = express.Router();

module.exports = function(app) {

	app.post("/student", function(req, res){
		console.log(db.students);
		db.students.create ({
			
			name: req.body.name,

			email: req.body.email,

			subject: req.body.subject

			

		}).then(function(dbStudents){
			
			res.redirect("/choose");
		})
		.catch(function(err){
			res.json(err);

		});

			console.log(req.body.name);
			console.log(req.body.email);
			console.log(req.body.subject);
			console.log(req.body);

	});
};