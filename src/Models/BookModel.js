import { Schema, model } from 'mongoose';

const BookSchema = new Schema ({
  title: {
		type: String,
		required: 'Path is required now'
	},
	subtitle: {
		type: String
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author'
	} 
}, {
	timestamps: true
})

export default model('Book', BookSchema)
