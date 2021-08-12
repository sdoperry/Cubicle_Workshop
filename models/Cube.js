const mongoose = require("mongoose");

const Cube = require("../models/cube");

const cubeSchema = new mongoose.Schema({
	name: String,
	description: String,
	imageURL: String,
	difficultyLevel: Number,
});

const CubeModel = mongoose.model("Cube", cubeSchema);

module.exports = CubeModel;
