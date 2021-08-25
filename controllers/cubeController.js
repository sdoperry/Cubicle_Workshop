const CubeModel = require("../models/Cube");

exports.home = async function (req, res) {
	await CubeModel.find(function (err, cubes) {
		if (err) return console.error(err);
		console.log(cubes);
		res.render("index", {
			cubes,
			title: "The Coolest Cubes Collection",
		});
	});
};

exports.create = function (req, res) {
	console.log(req.body);
	const newCube = new CubeModel(req.body);
	newCube.save(function (err, newCube) {
		console.log("A new cube has been saved");
	});
	res.redirect(301, "/");
};
