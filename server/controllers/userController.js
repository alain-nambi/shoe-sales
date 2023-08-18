const userModel = require("../models/userModel")

// Get all users 
const getAllUsers = (_req, res, _next) => {
  try {
    userModel
      .findAll()
      .then((users) => {
        res.status(200).json({ users: users });
      })
      .catch((error) => {
        console.log(`Error on getting all users : ${error}`);
      });
  } catch (error) {
    console.log(`Error on getting all users : ${error}`);
  }
};

// Get one user
const getUser = (req, res, _next) => {
  try {
    const userId = req.params.userId;
    if (userId) {
      userModel
        .findByPk(userId)
        .then((user) => {
          if (user) {
            res.status(200).json({ user: user });
          } else {
            res
              .status(404)
              .json({ message: `User with userId ${userId} is not found` });
          }
        })
        .catch((error) => {
          res.status(400).json({ message: error.message });
        });
    }
  } catch (error) {
    console.log(`Error on get user by userId : ${error}`);
  }
};

// Create user
const createUser = (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    userModel
      .create({
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
      .then((result) => {
        res.status(201).json({
          message: `User ${firstName} ${lastName} has been created`,
          user: result,
        });
      })
      .catch((error) => {
        res.status(401).json({ message: error.message });
        console.log(`Error on creating user : ${error}`);
      });
  } catch (error) {
    console.log(error);
  }
}; 

module.exports = {
    getAllUsers,
    getUser,
    createUser
}