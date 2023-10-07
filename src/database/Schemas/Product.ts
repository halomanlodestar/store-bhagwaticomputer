/** @format */

import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
	name: String,
	id: String,
	description: String,
	price: Number,
	availability: Boolean,
	image: String,
	category: {
		type: {
			label: String,
			slug: String,
		},
	},
});

export default mongoose.models.Product ||
	mongoose.model("Product", productSchema);
