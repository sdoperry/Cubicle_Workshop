const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = function (req, res) {
	const body = req.body;
	const password = body.password;
	const username = body.username;
	const saltRounds = 9;

	//	bcrypt.hash(password, saltRounds);
};
