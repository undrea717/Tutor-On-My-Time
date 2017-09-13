var db = require("../models");

module.exports = function(app) {
  console.log('working??')

  app.get("/choose", function(req, res){
      

      res.send("Done");
      db.availability.findAll({})
      
      .then(function(results){
        console.log(results)
      }).catch(function(err){
      res.json(err);

    
    });




    // })
  });


//   // GET route for getting all of the posts
//   app.get("/choose", function(req, res) {
//     // var query = {};
//     // if (req.query.Availability_day && req.query.Availability_startTime) {
//     //   query.tutorId = req.query.tutor_Id;
//     // }
 
//     // db.Availability.findAll({
//     //   where: query,
//     //   include: [db.tutor]
//     // }).then(function(dbAvailability) {
//     //   res.json(dbAvailability);
//     // });
//   });
  
//   app.post("/tutor", function(req, res) {

//     db.availabilities.create({
      
//       day: req.body.days,
//       startTime: req.body.timepicker,
//       subject: req.body.subject


      
//     }).then(function(dbTutor){
//       res.redirect("/bye")
//     })
//     .catch(function(err){
//       res.json(err);
//     });
//     console.log(req.body.days);
//       console.log(req.body.time);
//       console.log(req.body.subject);
//       console.log(req.body)


//   });

//   app.post("/student", function(req, res){
//     var query = {};
//       if(req.body.days == availabilities.day && req.body.timepicker == availabilities.startTime){
//         id.push(query);

      
//         // db.Availability.findAll({
//         //   where: query,
//         //   include: [db.tutors]
//         // })

//          console.log(req.body.day);


//       }
//     // .then(function(dbAvailability){
      
//     //   res.redirect("/choose");
//     // })
//     // .catch(function(err){
//     //   res.json(err);

//     // });
 
// });

}

