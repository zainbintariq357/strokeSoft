import { Schema, model } from 'mongoose';

const fileSchema = new Schema ({
  mainImage: {
    type: String,
    default: "none",
    required: true
  },
  thumbImage: {
    type: String,
    required: true
  }
},
{
  timestamps: true
}
);
export default model('File', fileSchema)

