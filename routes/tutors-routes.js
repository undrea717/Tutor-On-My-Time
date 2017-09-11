var db = require("../models");

module.exports = function(app) {


  // POST route for saving a new tutor
  app.post("/tutor", function(req, res) {

    db.Tutor.create(req.body).then(function(dbTutor) {
    	
      res.json(dbTutor);
    });
  });





};
