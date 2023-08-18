const userModel = require("../models/userModel")

// Get all users 
const getAllusers = async (req, res, next) => {
    try {   
        await userModel
            .findAll()
            .then((users) => {
                res.json({users: users})
            }).catch((error) => {
                console.log(`Error on getting all users : ${error}`);
            });
        
    } catch (error) {
        console.log(`Error on getting all users : ${error}`);
    }
}

module.exports = {
    getAllusers
}