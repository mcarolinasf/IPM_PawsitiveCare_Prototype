
const Joi = require("joi");

const Entry = require('../models/entry');


// Get All Entries

exports.getAll = async (req, res) => {
  try {
    const entries = await Entry.find();

    res.status(200).json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

