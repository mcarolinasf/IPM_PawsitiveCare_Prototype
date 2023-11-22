const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/ctrl");

const ctrlApi = "/ctrl";





router.delete(ctrlApi + "/reset",  ctrl.reset);



module.exports = router;