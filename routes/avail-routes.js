var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/choose", function(req, res) {
    var query = {};
    if (req.query.Availability_day && req.query.Availability_startTime) {
      query.tutorId = req.query.tutor_Id;
    }
 
    db.Availability.findAll({
      where: query,
      include: [db.tutor]
    }).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });
  

};


