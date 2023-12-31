const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.get("/login", authenticateToken, userController.getUserLogin);

router.get("/verify/:id", userController.verificationEmail);

router.get("/userProfiles", authenticateToken, userController.getUserProfiles);

router.post("/addProfile", userController.addUserProfile);

router.delete("/userProfiles/:id", userController.deleteUserProfile);

router.get("/me", authenticateToken, userController.getLoggedInUser);

module.exports = router;
