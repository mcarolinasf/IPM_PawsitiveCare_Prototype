const express = require("express");

const router = express.Router();

const user = require("../controllers/user");

const userAPI = "/users";

router.post(userAPI, user.createUser);

router.delete(userAPI + "/:idU",  user.deleteUser);

router.get(userAPI + "/:idU", user.getUser);

router.get(userAPI,  user.getAll);

router.put(userAPI + "/:idU",  user.updateUser);


/*          Pet          */

router.post(userAPI + "/:idU/pets",  user.addPet);

router.put(userAPI + "/:idU/pets/:idP",  user.updatePet);

router.delete(userAPI + "/:idU/pets/:idP",  user.deletePet);

router.get(userAPI + "/:idU/pets",  user.getUserPets);


/*          Tasks          */


router.get(userAPI + "/:idU/tasks",  user.getUserTasks);


/*          Entries          */

router.get(userAPI + "/:idU/entries",  user.getUserEntries);


module.exports = router;