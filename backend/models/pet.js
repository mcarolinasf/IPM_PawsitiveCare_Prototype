

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const petSchema = new mongoose.Schema({
  idP: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  age: { type: String },
  breed: { type: String },
  gender: { type: String },
  photoUrl: { type: String, required: true },
  color: { type: String },
  tail: { type: String },
  distinguishMarks: { type: String },
  typeOfCoat: { type: String },
  height: { type: String },
  weight: { type: String },
  tasksIds: { type: [String] },
  entryIds: { type: [String] },
  ownersIds: { type: [String], },

});

const Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
