const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postController.fetchPosts);
router.get("/:id", postController.fetchPostById);
router.post("/", postController.createPost)

module.exports = router;