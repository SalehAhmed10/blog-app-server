const express = require("express");

const router = express.Router();

const PostController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

// create a new post
router.post("/", authMiddleware, PostController.createPost);

// get all posts

router.get("/", PostController.getAllPosts);

module.exports = router;
