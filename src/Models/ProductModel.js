import { Schema, model } from 'mongoose';

const ProductSchema = new Schema (
	{
		name: String,
		description: String,
		image_url: String,
		image_thumbnail_url: String,
		price: Number,
		quantity: Number,
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category"
		}  
	},
	{
		timestamps: true
	}
)

export default model("Product", ProductSchema);
