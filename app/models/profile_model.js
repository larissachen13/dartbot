import mongoose, { Schema } from 'mongoose';

// create a schema for posts with a field
const ProfileSchema = new Schema({
  name: String,
  description: String,
});

// create model class
const ProfileModel = mongoose.model('Profile', ProfileSchema);

export default ProfileModel;
