const express = require("express");
const {fetchAllPosts, fetchUser} = require("../controllers/user.controller")

const router = express.Router();

router.get("/", fetchAllPosts)
router.get("/:id", fetchUser)


module.exports = router;