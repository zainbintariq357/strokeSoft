import { Schema, model } from 'mongoose';

const CategorySchema = new Schema (
	{
		name: String,
		product: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product"
			}
		]
	},
	{
		timestamps: true
	}
);
export default model("Category", CategorySchema);

