const express = require("express");
const {fetchAllPosts, fetchPost, createPost} = require("../controllers/post.controller")
const multer = require("../middlewares/multer-config");

const router = express.Router();

router.get("/", fetchAllPosts)
router.get("/:id", fetchPost)
router.post("/", multer.single("string"), createPost)
// router.patch("/:id", )
// router.delete("/:id", )


module.exports = router;