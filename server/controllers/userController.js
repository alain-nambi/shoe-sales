const UserModel = require("../models/UserModel")
const bcrypt = require("bcrypt")

// Get all users 
const getAllUsers = async (_req, res, _next) => {
  try {
    await UserModel
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
      await UserModel
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
    const { firstName, lastName, email, password } = req.body;

    // Check if the firstName field is empty
    if (!firstName) {
      // Throw an error with the message "First name is required"
      throw new Error('First name is required');
    }

    // The throw statement is used to terminate the execution of the current function and propagate the error to the caller.
    // Check if the lastName field is empty
    if (!lastName) {
      // Throw an error with the message "Last name is required"
      throw new Error('Last name is required');
    }

    // Check if the email field is empty
    if (!email) {
      // Throw an error with the message "Email is required"
      throw new Error('Email is required');
    }

    // Check if the password field is empty
    if (!password) {
      // Throw an error with the message "Password is required"
      throw new Error('Password is required');
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    })
    
    res.status(201).json({
      message: `User ${firstName} ${lastName} has been created`,
      user: result,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })

    console.log(`Error on creating user : ${error}`);
  }
}; 

// Delete user
const deleteUser = async (req, res, _next) => {
  try {
    const userId = req.params.userId
    if (userId) {
      await UserModel
        .findByPk(userId)
        .then((user) => {
          if (user) {
            const { firstName, lastName } = user.dataValues;

            UserModel
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

// Update user
const updateUser = async (req, res, _next) => {
  const { userId } = req.params
  const { updatedEmail, updatedFirstName, updatedLastName } = req.body

  try {
    await UserModel
      .findByPk(userId)
      .then((user) => {
        if (user) {
          user.email = updatedEmail
          user.firstName = updatedFirstName
          user.lastName = updatedLastName
          
          user.save()

          res
            .status(201)
            .json({
              user: user,
              message: `User has been updated`
            })
        } else {
          res
            .status(404)
            .json({
              message: `User not found`
            })
        }
      })
  } catch (error) {
    res
      .status(401)
      .json({
        message: "User can't be updated"
      })
    console.log(`Error on updating user ${error}`);
  }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
}