

const mongoose = require('mongoose');


const entrySchema = new mongoose.Schema({

  idE: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
  ownersIds: { type: [String], required: true },
  petId: { type: String, required: true },

});

const Entry = mongoose.model('tasks', entrySchema);

module.exports = Entry;
