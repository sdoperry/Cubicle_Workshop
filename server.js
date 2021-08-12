const env = process.env.NODE_ENV || "development";

const config = require("./config/config")[env];
const app = require("express")();

const mongoose = require("mongoose");

require("./config/express")(app);
require("./config/routes")(app);

mongoose.connect(
	"mongodb+srv://sdoperry:MarleyMarcie@cubes.x1o99.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("Database is CONNECTED! YAY!");
});

app.listen(
	config.port,
	console.log(`Listening on port ${config.port}! Now its up to you...`)
);
