import { Schema, model  } from 'mongoose';

const ExerciseSchema = new Schema(
	{
		username: { type: String, required: true },
		description: {type: String, required: true},
		duration: {type: Number, required: true},
		date: { type: Date, required: true }
	},
	{
		timestamps: true
	}
);

export default model('Exercise', ExerciseSchema);