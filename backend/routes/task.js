const express = require("express");

const router = express.Router();

const task = require("../controllers/task");

const taskAPI = "/tasks";


router.get(taskAPI + "/:idT", task.getTask);

router.get(taskAPI,  task.getAll);

router.put(taskAPI + "/:idT",  task.updateTask);



module.exports = router;