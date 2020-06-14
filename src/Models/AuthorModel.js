import { Schema, model } from 'mongoose';

const AuthorSchema = new Schema ({
  name: {
		type: String,
		required: 'Path is required now'
	},
	bio: {
		type: String
	},
	website: {
		type: String
	},
	books: [
		{
			type: Schema.Types.ObjectId, ref: 'Book'
		}
	] 
}, {
	timestamps: true
})

export default model('Author', AuthorSchema)
