const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post("/", userController.createUser);
router.put("/:email", userController.updateUser);
router.delete("/:email", userController.deleteUser);

module.exports = router;