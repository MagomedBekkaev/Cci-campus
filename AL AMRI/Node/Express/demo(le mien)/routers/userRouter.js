const express = require("express")

const router = express.Router();

// Définir les routes ici

router.get("/", (request, response) => response.status(200).json({name: "John"}))

router.get("/:id", (request, response) => {
    const {id} = request.params
    response.status(200).json({name: "John", id: id})
})

module.exports = router;