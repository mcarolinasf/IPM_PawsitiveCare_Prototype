const express = require("express");

const router = express.Router();

const entry = require("../controllers/entry");

const entryAPI = "/entries";

//router.get(entryAPI + "/:idE", entry.getEntry);

router.get(entryAPI,  entry.getAll);





module.exports = router;