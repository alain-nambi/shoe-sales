const userController = require("../controllers/userController")
const router = require("express").Router()

router.get("/", userController.getAllusers)

module.exports = router