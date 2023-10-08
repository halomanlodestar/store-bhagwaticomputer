/** @format */

import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
	label: String,
	slug: String,
});

export default mongoose.models.Category ||
	mongoose.model("Category", categorySchema);
