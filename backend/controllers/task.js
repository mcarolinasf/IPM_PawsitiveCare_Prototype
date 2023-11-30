const Joi = require("joi");
const Task = require('../models/task');



const createTaskSchema = Joi.object({
    text: Joi.string().required(),
    type: Joi.string().required(),
    time: Joi.string().required(),
    date: Joi.string().required(),
    petId: Joi.string().required(),
    done: Joi.boolean(),
    trainingPlanId: Joi.string(),
    ownersIds: Joi.array().items(Joi.string()).required(),
    info: Joi.object().required() 
  });
  
  exports.createTask = async (req, res) => {
      try {
        const { error } = createTaskSchema.validate(req.body);
    
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
    
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
    
        res.status(201).json(savedTask);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error while creating task' });
      }
    };
  
  
  const deleteTaskSchema = Joi.object({
    idT: Joi.string().required(),
  });
  
  exports.deleteTask = async (req, res) => {
    try {
      const { error } = deleteTaskSchema.validate(req.params);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      // delete task from the database
      const deletedTask = await Task.findOneAndDelete({ idT: req.params.idT });
  
      if (deletedTask === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const getTaskSchema = Joi.object({
    idT: Joi.string().required(),
  });
  
  exports.getTask = async (req, res) => {
    try {
      // validate the task ID parameter using Joi
      const { error } = getTaskSchema.validate(req.params);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      // find task by ID in the database
      const task = await Task.findOne({ idT: req.params.idT });
  
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error });
    }
  };
  
  exports.getAll = async (req, res) => {
    try {
      const tasks = await Task.find();
  
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const updateTaskSchema = Joi.object({
    text: Joi.string(),
    type: Joi.string(),
    time: Joi.string(),
    date: Joi.string(),
    done: Joi.boolean(),
    trainingPlanId: Joi.string(),
    ownersIds: Joi.array().items(Joi.string()),
  });
  
  exports.updateTask = async (req, res) => {
    try {
      //Validate the request params
      const { paramError } = Joi.string().validate(req.params.idT);
  
      // validate the request body using Joi
      const { error } = updateTaskSchema.validate(req.body);
  
      if (error || paramError) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      // find task by ID in the database
      const task = await Task.findOne({ idT: req.params.idT });
  
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      req.body.idT = req.params.idT;
      const updatedTask = await Task.findOneAndUpdate(
        { idT: req.params.idT }, // This should be an object specifying the filter criteria
        req.body, // Data to update
        { new: true }
      );
      
  
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };