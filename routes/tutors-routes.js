var db = require("../models");

module.exports = function(app) {


  // POST route for saving a new tutor
  app.post("/tutor", function(req, res) {
  		
    db.Tutors.create({
	
			name: req.body.name,
			day: req.body.days,
		    startTime: req.body.time,
		    subject: req.body.subject


			
		}).then(function(dbTutor){
			res.redirect("/bye")
		})
		.catch(function(err){
			res.json(err);

		
    });
  		
  		console.log(req.body);
  });



}
  