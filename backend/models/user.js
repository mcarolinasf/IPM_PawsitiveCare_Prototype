
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  idU: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  photoUrl: { type: String },
  petIds: { type: [String] },
  tasksIds: { type: [String] },
  entryIds: { type: [String] },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
