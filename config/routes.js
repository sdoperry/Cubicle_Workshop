// TODO: Require Controllers...

module.exports = (app) => {
	// TODO..
	app.get("/", function (req, res) {
		res.render("index");
	});

	app.get("/about", function (req, res) {
		res.render("about");
	});

	app.get("/create", function (req, res) {
		res.render("create");
	});

	app.post("/create", function (req, res) {
		console.log(req.body);
		res.send("Form request received");
	});

	app.get("/details/:id", function (req, res) {
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});

	app.get("/*", (req, res) => {
		res.render("404");
	});
};
