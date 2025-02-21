const express = require("express");
const router = express.Router();
const {
    fetchAll,
    fetchById,
    createInvoice,
    editInvoice,
    removeInvoice,
}  = require("../controller/invoice.controller");

router.get("/", fetchAll)
router.get("/:id", fetchById)
router.post("/", createInvoice)
router.patch("/:id", editInvoice)
router.delete("/:id", removeInvoice)

module.exports = router;