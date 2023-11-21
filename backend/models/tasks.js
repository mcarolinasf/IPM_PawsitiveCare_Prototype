

const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({

  idT: { type: String, required: true },
  text: { type: String, required: true },
  type: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  petId: { type: String, required: true },
  //Set default false?
  done: { type: String },
  //May not be needed
  owners: { type: [String], required: true },
  trainingPlanId: { type: String },

});

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;
