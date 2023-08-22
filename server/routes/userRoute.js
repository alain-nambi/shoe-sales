const UserController = require("../controllers/UserController")
const router = require("express").Router()

// Get all users endpoint 
router.get("/users", UserController.getAllUsers)

// Get one user endpoint
router.get("/users/:userId", UserController.getUser)

// Create user endpoint
router.post("/users/create", UserController.createUser)

// Delete user endpoint
router.delete("/users/delete/:userId", UserController.deleteUser)

// Update user endpoint
router.put("/users/update/:userId", UserController.updateUser)

module.exports = router