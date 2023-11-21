const express = require("express");

const router = express.Router();

const pet = require("../controllers/pet");

const petAPI = "/pets";

router.get(petAPI + "/:idP", pet.getPet);

router.get(petAPI,  pet.getAll);


/*          Tasks          */


router.get(petAPI + "/:idU/tasks",  pet.getPetTasks);



/*          Entries          */

router.post(petAPI + ":idP/entries", task.createEntry);

router.delete(petAPI + ":idP/entries/:idE",  task.deleteEntry);

router.put(petAPI + ":idP/entries/:idE",  task.updateEntry);

router.get(petAPI + ":idP/entries",  task.getPetEntries);



module.exports = router;