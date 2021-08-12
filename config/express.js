const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

module.exports = (app) => {
	// setting view engine to hbs, engine compiles views and data into HTML
	app.set("view engine", "hbs");
	app.engine(
		"hbs",
		exphbs({
			extname: "hbs",
			defaultLayout: "",
			layoutsDir: __dirname + "/views",
			partialsDir: __dirname + "/views",
		})
	);

	//TODO: Setup the body parser
	app.use(bodyParser.urlencoded({ extended: true }));

	//TODO: Setup the static files
	app.use(express.static("static"));
};
