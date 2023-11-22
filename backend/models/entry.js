

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const entrySchema = new mongoose.Schema({

  idE: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String },
  ownersIds: { type: [String], required: true },
  idP: { type: String, required: true },

});

const Entry = mongoose.model('entries', entrySchema);

module.exports = Entry;
