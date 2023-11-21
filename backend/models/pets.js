

const mongoose = require('mongoose');


const petSchema = new mongoose.Schema({

  idP: { type: String, required: true },
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
  ownersIds: { type: [String], required: true },

});

const Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
