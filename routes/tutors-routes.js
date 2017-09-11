var db = require("../models");

module.exports = function(app) {


  // POST route for saving a new tutor
  app.post("/tutor", function(req, res) {

    db.Tutor.create({
			
			name: req.body.name,

			email: req.body.email,

			image: req.body.image

		}).then(function(dbTutor){
			res.json(dbTutor);
		})
		.catch(function(err){
			res.json(err);
    });
  });





};
