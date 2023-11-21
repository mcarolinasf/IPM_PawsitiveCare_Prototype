
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const userSchema = new mongoose.Schema({
  idU: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, required: true },
  photoUrl: { type: String },
  petIds: { type: [String] },
  tasksIds: { type: [String] },
  entryIds: { type: [String] },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
