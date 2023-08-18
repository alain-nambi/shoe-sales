const userModel = require("../models/userModel")

// Get all users 
const getAllUsers = (_req, res, _next) => {
    try {   
        userModel
            .findAll()
            .then((users) => {
                res
                    .status(200)
                    .json({users: users})
            }).catch((error) => {
                console.log(`Error on getting all users : ${error}`);
            });
    } catch (error) {
        console.log(`Error on getting all users : ${error}`);
    }
}

const getUser = (req, res, _next) => {
    try {
        const userId = req.params.userId
        if (userId) {
            userModel
                .findByPk(userId)
                .then(user => {
                    if (user) {
                        res
                            .status(200)
                            .json({user: user})
                    } else {
                        res
                            .status(404)
                            .json({message: `User with userId ${userId} is not found`})
                    }
                })
        }
    } catch (error) {
        console.log(`Error on get user by userId : ${error}`);
    }
}

module.exports = {
    getAllUsers,
    getUser,
}