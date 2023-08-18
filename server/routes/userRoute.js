const userController = require("../controllers/userController")
const router = require("express").Router()

router.get("/users", userController.getAllUsers)
router.get("/user/:userId", userController.getUser)

module.exports = router