var db = require("../models");

module.exports = function(app) {

	app.post("/student", function(req, res){

		db.Students.create({
			
			name: req.body.name,

			email: req.body.email,

			subject: req.body.subject

		}).then(function(dbStudents){
			res.json(dbStudents);
		})
		.catch(function(err){
			res.json(err);

		});
	});
};