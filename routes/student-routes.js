var db = require("../models");
// var express = require("express");
// var router = express.Router();

module.exports = function(app) {
	var results;

	app.post("/student", function(req, res){
		
		console.log('works')

		db.Tutors.findAll({
			where: {
				day: req.body.days,
				subject: req.body.subject

			}

		}).then(function(results){
			 // return results[0].name;
			console.log('working2');
			var results = results[0].name;
			
			});res.render("/choose", {


			name: results
				
			
				
			

			// db.availability.create({

			// 	option1: results[0].name


			}).then(function(res){

				console.log('thisworks')
			
			// if(results >= 0){

		// 	console.log(results[0].name);
		// 	console.log(results[1].name);
			
		// var results =  results[0].name;
		
			// res.sendFile("/choose") 
			
			
			// }
			// else{
			// 	alert("Sorry No Tutors Available")
			// 	res.redirect("/students")
			// }
		
			}).catch(function(err){
			

		});

		
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
	});

	
				
}