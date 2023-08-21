const userModel = require("../models/userModel")

// Get all users 
const getAllUsers = async (_req, res, _next) => {
  try {
    await userModel
      .findAll()
      .then((users) => {
        res
          .status(200)
          .json({ users: users });
      })
  } catch (error) {
    console.log(`Error on getting all users : ${error}`);
  }
};

// Get one user
const getUser = async (req, res, _next) => {
  try {
    const userId = req.params.userId;
    if (userId) {
      await userModel
        .findByPk(userId)
        .then((user) => {
          if (user) {
            res
              .status(200)
              .json({ user: user });
          } else {
            res
              .status(404)
              .json({ message: `User not found` });
          }
        })
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message })

    console.log(`Error on get user by userId : ${error}`);
  }
};

// Create user
const createUser = async (req, res, _next) => {
  try {
    const { firstName, lastName, email } = req.body;
    await userModel
      .create({
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
      .then((result) => {
        res
          .status(201)
          .json({
            message: `User ${firstName} ${lastName} has been created`,
            user: result,
          });
      })
  } catch (error) {
    res
      .status(401)
      .json({ message: error.message })
    
    console.log(`Error on creating user : ${error}`);
  }
}; 

// Delete user
const deleteUser = async (req, res, _next) => {
  try {
    const userId = req.params.userId
    if (userId) {
      await userModel
        .findByPk(userId)
        .then((user) => {
          if (user) {
            const { firstName, lastName } = user.dataValues;

            userModel
              .destroy({
                where: {id: userId}
              })

            res
              .status(200)
              .json({
                message: `User ${firstName} ${lastName} has been deleted`
              })
          } else {
            res
              .status(404)
              .json({
                message: `User not found`
              })
          }
        })
    }
  } catch (error) {
    res
      .status(404)
      .json({
        message: `User not found`
      })

    console.log(`Error on deleting user : ${error}`);
  }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
}