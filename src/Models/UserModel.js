import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		}
	},{
		timestamps: true
	}
)

export default model('User', UserSchema);