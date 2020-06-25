import {Schema, model} from 'mongoose';

const CarSchema = new Schema (
	{
		make: String,
		model: String,
		Name: String,
		seller : {
			type: Schema.Types.ObjectId,
			ref: 'UserCar'
		}			
	},
	{
		timestamps: true
	}
)

export default model('Car', CarSchema);