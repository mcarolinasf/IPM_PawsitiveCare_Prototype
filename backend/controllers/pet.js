

const Joi = require("joi");
const Pet = require('../models/pet');
const Task = require('../models/task');
const Entry = require('../models/entry');


// Get Pet

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

// Get All Pets

exports.getAll = async (req, res) => {
  try {
    const pets = await Pet.find();

    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};




/*************  Tasks  ***************/


// Get pet Tasks

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

    const petTasks = await Task.find({ petId: req.params.idP });

    res.status(200).json(petTasks);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
}
};


/*************  Entries  ***************/


//CREATE

const createEntrySchema = Joi.object({
  title: Joi.string().required(),
  type: Joi.string().required(),
  date: Joi.string().required(),
  text: Joi.string().required(),
  ownersIds: Joi.array().items(Joi.string()),
});

const createEntryParamSchema = Joi.object({
  idP: Joi.string().required(),
});

exports.createEntry = async (req, res) => {
    try {

      const { errorParam } = createEntryParamSchema.validate(req.params);

      const { error } = createEntrySchema.validate(req.body);
  
      if (error || errorParam) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      const newEntry = new Entry(req.body);
      const savedEntry = await newEntry.save();
  
      res.status(201).json(savedEntry);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error while creating entry' });
    }
};


//DELETE

const deleteEntrySchema = Joi.object({
  idP: Joi.string().required(),
  idE: Joi.string().required(),
});

exports.deleteEntry = async (req, res) => {
  try {
    // validate the request body using Joi
    const { error } = deleteEntrySchema.validate(req.params);

    if (error ) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find pet by ID in the database
    const pet = await Pet.findOne({ idP: req.params.idP });

    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // delete entry from the database
    const deletedEntry = await Entry.findOneAndDelete({ idE: req.params.idE });

    if (deletedEntry === 0) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



//UPDATE

const updateEntryParamSchema = Joi.object({
  idP: Joi.string().required(),
  idE: Joi.string().required(),
});

const updateEntrySchema = Joi.object({
  title: Joi.string().required(),
  type: Joi.string().required(),
  date: Joi.string().required(),
  text: Joi.string().required(),
  ownersIds: Joi.array().items(Joi.string()),
});

exports.updateEntry = async (req, res) => {
try {
  //Validate the request params
  const { paramError } = updateEntryParamSchema(req.params);

  // validate the request body using Joi
  const { error } = updateEntrySchema.validate(req.body);

  if (error || paramError) {
    return res.status(400).json({ message: error.details[0].message });
  }

   // find pet by ID in the database
   const pet = await Pet.findOne({ idP: req.params.idP });

   if (!pet) {
     return res.status(404).json({ message: "Pet not found" });
   }

  // find entry by ID in the database
  const entry = await Entry.findOne({ idE: req.params.idE });

  if (!entry) {
    return res.status(404).json({ message: "Entry not found" });
  }

  const updatedEntry = await Entry.findOneAndUpdate(
    { idE: req.params.idE }, 
    req.body,
    { new: true }
  );
  
  res.status(200).json(updatedEntry);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
}
};


//Get Pet Entries

const getPetEntriesSchema = Joi.object({
    idP: Joi.string().required(),
  });

exports.getPetEntries = async (req, res) => {
  try {

    // validate the pet ID parameter using Joi
    const { error } = getPetEntriesSchema.validate(req.params);

    if (error) {
    return res.status(400).json({ message: error.details[0].message });
    }
    
    // find pet by ID in the database
    const pet = await Pet.findOne({ idP: req.params.idP });

    if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
    }

    const entries = await Entry.find({ petId: pet._id });

    res.status(200).json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};









