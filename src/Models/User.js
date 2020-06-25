import { Schema, model } from 'mongoose';

const userSchema = new Schema (
	{
		firstName: String,
		lastName: String,
		email: String,
		cars: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Car'
			}
		]
	},
	{
		timestamps: true
	}
) 
export default model('UserCar', userSchema);