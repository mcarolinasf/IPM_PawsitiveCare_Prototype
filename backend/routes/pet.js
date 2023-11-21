const express = require("express");

const router = express.Router();

const pet = require("../controllers/pet");

const userAPI = "/api/pets";

router.post(userAPI, pet.createPet);

router.delete(userAPI + "/:idP",  pet.deletePet);

router.get(userAPI + "/:idP", pet.getPet);

router.get(userAPI,  pet.getAll);

router.put(userAPI + "/:idP",  pet.updatePet);

router.get(userAPI + "/:idU/tasks",  pet.getPetTasks);



module.exports = router;