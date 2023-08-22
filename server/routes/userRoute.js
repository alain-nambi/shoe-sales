const userController = require("../controllers/userController")
const router = require("express").Router()

// Get all users endpoint 
router.get("/users", userController.getAllUsers)

// Get one user endpoint
router.get("/users/:userId", userController.getUser)

// Create user endpoint
router.post("/users/create", userController.createUser)

// Delete user endpoint
router.delete("/users/delete/:userId", userController.deleteUser)

// Update user endpoint
router.put("/users/update/:userId", userController.updateUser)

module.exports = router