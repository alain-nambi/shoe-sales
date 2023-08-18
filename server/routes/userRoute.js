const userController = require("../controllers/userController")
const router = require("express").Router()

// Get all users 
router.get("/users", userController.getAllUsers)

// Get one user
router.get("/users/:userId", userController.getUser)

// Create user
router.post("/users/create", userController.createUser)

module.exports = router