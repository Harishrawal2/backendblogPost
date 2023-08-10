const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  SignupController,
  LoginController,
  getAllUsers,
  deleteUserById,
  getUserById,
} = require("../controllers/authController");
const router = express.Router();
// post api
router.post("/signup", SignupController);
router.post("/login", LoginController, authMiddleware.requireAuth);

// get api
router.get("/allusers", getAllUsers);

// Route to delete a user by ID
router.delete("/:id", deleteUserById);

// Route to find a user by ID
router.get("/:id", getUserById);

module.exports = router;
