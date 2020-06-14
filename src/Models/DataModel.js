import { Schema, model } from 'mongoose';

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);
export default model('Data', DataSchema)

