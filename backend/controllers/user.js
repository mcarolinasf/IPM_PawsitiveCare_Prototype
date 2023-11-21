

const Joi = require("joi");
const User = require('../models/user');


const createUserSchema = Joi.object({
  idU: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  photoUrl: Joi.string().required(),
  password: Joi.string().required(),
  pets: Joi.array().items(Joi.string()),
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
    pets: Joi.array().items(Joi.string()),
});

exports.updateUser = async (req, res) => {
  try {
    //Validate the request params
    const { paramError } = Joi.number().integer().validate(req.params.idU);

    // validate the request body using Joi
    const { error } = updateUserSchema.validate(req.body);

    if (error || paramError) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find user by ID in the database
    const user = await User.findByPk({
      where: { idU: req.params.idU },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.idU, req.body, { new: true });

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
    // validate the request query
    const { error } = getUserProjectsSchema.validate(req.params);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // find user by ID in the database
    const user = await User.findByPk({
      where: { idU: req.params.idU, uid: req.uid },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    /* const assignedP = await Assigned.findAll({
      where: { idU: req.params.idU },
    });
    const projectIds = assignedP.map((obj) => obj.idP);

    let projects = [];

    for (const projectId of projectIds) {
      const project = await Project.findByPk(projectId);
      if (!project)
        return res.status(404).send(`Project with ID ${projectId} not found.`);
      projects.push(project);
    } */

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};





