// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//X
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================



db.sequelize.sync({ force: false }).then(function() {
	app.listen(PORT, () => {
		console.log("App listening on PORT " + PORT);
	});
});
