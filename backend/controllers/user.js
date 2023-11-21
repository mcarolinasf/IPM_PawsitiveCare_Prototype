

const Joi = require("joi");
const User = require('../models/user');
const Pet = require('../models/pet');


const createUserSchema = Joi.object({
  idU: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  photoUrl: Joi.string().required(),
  password: Joi.string().required(),
  petIds: Joi.array().items(Joi.string()),
});

exports.createUser = async (req, res) => {
    try {
      const { error } = createUserSchema.validate(req.body);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
  
      res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error while creating user' });
    }
  };


const deleteUserSchema = Joi.object({
  idU: Joi.string().required(),
});

exports.deleteUser = async (req, res) => {
  try {
    const { error } = deleteUserSchema.validate(req.params);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

   /*  // Delete the user from Firebase Authentication
    await admin.auth().deleteUser(req.params.idU); */

    // delete user from the database
    const deletedUser = await User.findOneAndDelete({ idU: req.params.idU });

    if (deletedUser === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUserSchema = Joi.object({
  idU: Joi.string().required(),
});

exports.getUser = async (req, res) => {
  try {
    // validate the user ID parameter using Joi
    const { error } = getUserSchema.validate(req.params);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find user by ID in the database
    const user = await User.findOne({ idU: req.params.idU });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    photoUrl: Joi.string().required(),
    password: Joi.string().required(),
    petIds: Joi.array().items(Joi.string()),
});

exports.updateUser = async (req, res) => {
  try {
    //Validate the request params
    const { paramError } = Joi.string().validate(req.params.idU);

    // validate the request body using Joi
    const { error } = updateUserSchema.validate(req.body);

    if (error || paramError) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find user by ID in the database
    const user = await User.findOne({ idU: req.params.idU });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { idU: req.params.idU }, // This should be an object specifying the filter criteria
      req.body, // Data to update
      { new: true }
    );
    

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUserPetsSchema = Joi.object({
  idU: Joi.string().required(),
});

exports.getUserPets = async (req, res) => {
  try {
    
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



const createPetSchema = Joi.object({
  idP: Joi.string().required(),
  name: Joi.string().required(),
  age: Joi.string().required(),
  breed: Joi.string().required(),
  gender: Joi.string().required(),
  photoUrl: Joi.string().required(),
  color: Joi.string().required(),
  tail: Joi.string().required(),
  distinguishMarks: Joi.string().required(),
  typeOfCoat: Joi.string().required(),
  height: Joi.string().required(),
  weight: Joi.string().required(),
  tasksIds: Joi.array().items(Joi.string()),
  entryIds: Joi.array().items(Joi.string()),
  ownersIds: Joi.array().items(Joi.string()).required(),
});


exports.addPet = async (req, res) => {
  try {

    // validate the user ID parameter using Joi
    const { errorParam } = Joi.string().validate(req.params.idU);

    const { error } = createPetSchema.validate(req.body);

    if (error || paramError) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find user by ID in the database
    const user = await User.findOne({ idU: req.params.idU });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newPet = new Pet(req.body);

    //Add to user pets
    const filter = { idU: req.params.idU };
    const update = { $push: { petIds: newPet.idP } };
    const updatedUser = await User.findOneAndUpdate( filter, update, { new: true } );

    const savedPet = await newPet.save();
    

    res.status(201).json(savedPet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error while creating pet' });
  }
};


const deletePetSchema = Joi.object({
  idU: Joi.string().required(),
  idP: Joi.string().required(),
});

exports.deletePet = async (req, res) => {

try {
  const { error } = deletePetSchema.validate(req.params);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // delete pet from the database
  const deletedPet = await Pet.findOneAndDelete({ idP: req.params.idP });

  if (deletedPet === 0) {
    return res.status(404).json({ message: "Pet not found" });
  }

  const filter = { idU: req.params.idU };
  const update = { $pull: { petIds: deletedPet.idP } };
  const updatedUser = await User.findOneAndUpdate( filter, update, { new: true } );

  res.status(204).send();
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
}
};


const updatePetSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.string().required(),
  breed: Joi.string().required(),
  gender: Joi.string().required(),
  photoUrl: Joi.string().required(),
  color: Joi.string().required(),
  tail: Joi.string().required(),
  distinguishMarks: Joi.string().required(),
  typeOfCoat: Joi.string().required(),
  height: Joi.string().required(),
  weight: Joi.string().required(),
  tasksIds: Joi.array().items(Joi.string()),
  entryIds: Joi.array().items(Joi.string()),
  ownersIds: Joi.array().items(Joi.string()).required(),
});

const updatePetParamSchema = Joi.object({
  idU: Joi.string().required(),
  idP: Joi.string().required(),
});

exports.updatePet = async (req, res) => {

try {
  //Validate the request params
  const { paramError } = updatePetParamSchema(req.params);

  // validate the request body using Joi
  const { error } = updatePetSchema.validate(req.body);

  if (error || paramError) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // find user by ID in the database
  const user = await User.findOne({ idU: req.params.idU });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // find pet by ID in the database
  const pet = await Pet.findOne({ idP: req.params.idP });

  if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
  }

  const updatedPet = await Pet.findOneAndUpdate(
    { idP: req.params.idP },
    req.body,
    { new: true }
  );
  

  res.status(200).json(updatedPet);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
}
};






