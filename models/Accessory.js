const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessorySchema = Schema({
	name: String,
	description: String,
	imageUrl: String,
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
