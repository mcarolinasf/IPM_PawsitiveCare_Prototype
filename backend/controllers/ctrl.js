
const Joi = require("joi");

const Entry = require('../models/entry');
const Task = require('../models/task');
const Pet = require('../models/pet');
const User = require('../models/user');



exports.reset = async (req, res) => {
    try {
        // Delete all documents from each collection
        await Promise.all([
            Entry.deleteMany({}),
            Task.deleteMany({}),
            Pet.deleteMany({}),
            User.deleteMany({})
        ]);

        res.status(200).json({ message: 'All models reset successfully.' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

