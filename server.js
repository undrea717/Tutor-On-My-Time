var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");
var path = require("path");
//Code to validate with firebase
// var admin = require("firebase-admin");
// var serviceAccount = require("./tutorscheduling-d97eb-firebase-adminsdk-udwcp-52f09e7f6e.json");
// var firebaseAdmin = admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount),
// 	databaseURL: "https://tutorscheduling-d97eb.firebaseio.com"
// });

var app = express();

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname, "/public")));

//create function middleware
// function isAuthenticated(request, response, next) {
	// check if user is logged in
	//if they are, attach the use to the request object and call next
	//if they are not, send them to the login page
	//with a message saying: "login"

// }

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/tutors-routes.js")(app);
require("./routes/student-routes.js")(app);
require("./routes/avail-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});