import mongoose, { Schema } from 'mongoose';

// create a schema for posts with a field
const LocSchema = new Schema({
  gps: { lat: String, long: String },
  content: String,
});

// create model class
const LocModel = mongoose.model('Loc', LocSchema);

export default LocModel;
