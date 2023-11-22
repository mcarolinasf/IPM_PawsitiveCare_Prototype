const express = require("express");

const router = express.Router();

const pet = require("../controllers/pet");

const petAPI = "/pets";

router.get(petAPI + "/:idP", pet.getPet);

router.get(petAPI,  pet.getAll);


/*          Tasks          */


router.get(petAPI + "/:idP/tasks",  pet.getPetTasks);



/*          Entries          */

router.post(petAPI + ":idP/entries", pet.createEntry);

router.delete(petAPI + ":idP/entries/:idE",  pet.deleteEntry);

router.put(petAPI + ":idP/entries/:idE",  pet.updateEntry);

router.get(petAPI + ":idP/entries",  pet.getPetEntries);



module.exports = router;