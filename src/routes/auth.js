// routes/auth.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

// get all users
router.get("/users", UserController.getAllUsers);

module.exports = router;
