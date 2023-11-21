

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const entrySchema = new mongoose.Schema({

  idE: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
  ownersIds: { type: [String], required: true },
  petId: { type: String, required: true },

});

const Entry = mongoose.model('tasks', entrySchema);

module.exports = Entry;
