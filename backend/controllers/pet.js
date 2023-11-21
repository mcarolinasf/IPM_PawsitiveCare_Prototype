

const Joi = require("joi");
const Pet = require('../models/pet');
const Task = require('../models/task');



const getPetSchema = Joi.object({
  idP: Joi.string().required(),
});

exports.getPet = async (req, res) => {
  try {
    // validate the pet ID parameter using Joi
    const { error } = getPetSchema.validate(req.params);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find pet by ID in the database
    const pet = await Pet.findOne({ idP: req.params.idP });

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const pets = await Pet.find();

    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getPetTasksSchema = Joi.object({
    idP: Joi.string().required(),
  });
  
exports.getPetTasks = async (req, res) => {
try {
    // validate the pet ID parameter using Joi
    const { error } = getPetTasksSchema.validate(req.params);

    if (error) {
    return res.status(400).json({ message: error.details[0].message });
    }

    // find pet by ID in the database
    const pet = await Pet.findOne({ idP: req.params.idP });

    if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
    }

    //TODO: TEST
    const petTasks = await Task.find({ petId: req.params.idP });

    res.status(200).json(petTasks);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
}
};







