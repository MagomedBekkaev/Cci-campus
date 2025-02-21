const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.get("/", clientController.fetchAll);
router.get("/:id", clientController.fetchOne);

router.post("/", clientController.create);
router.put("/:id", clientController.update);
router.delete("/:id", clientController.delete);

module.exports = router;