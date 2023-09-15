import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

// Get all users
const getAllUsers = async (_req, res, _next) => {
  try {
    await UserModel.findAll().then((users) => {
      if (!users) {
        return res.status(404).json({
          message: "User can't be fetched",
        });
      }

      return res.status(200).json({
        users: users,
      });
    });
  } catch (error) {
    console.log(`Error on getting all users : ${error}`);

    return res.status(500).json({
      message: error.message,
    });
  }
};

// Get one user
const getUser = async (req, res, _next) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      throw new Error("User ID is required");
    }

    await UserModel.findByPk(userId).then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        user: user,
      });
    });
  } catch (error) {
    console.log(`Error on get user by userId : ${error}`);

    return res.status(500).json({
      message: error.message,
    });
  }
};

// Create user
const createUser = async (req, res, _next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the firstName field is empty
    if (!firstName) {
      // Throw an error with the message "First name is required"
      throw new Error("First name is required");
    }

    // The throw statement is used to terminate the execution of the current function and propagate the error to the caller.
    // Check if the lastName field is empty
    if (!lastName) {
      // Throw an error with the message "Last name is required"
      throw new Error("Last name is required");
    }

    // Check if the email field is empty
    if (!email) {
      // Throw an error with the message "Email is required"
      throw new Error("Email is required");
    }

    // Check if the password field is empty
    if (!password) {
      // Throw an error with the message "Password is required"
      throw new Error("Password is required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    }).then((result) => {
      return res.status(201).json({
        message: "User has been created",
        user: result,
      });
    });
  } catch (error) {
    console.log(`Error on creating user : ${error}`);

    return res.status(500).json({
      message: error.message,
    });
  }
};

// Delete user
const deleteUser = async (req, res, _next) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      throw new Error("User ID is required");
    }

    const user = await UserModel.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    UserModel.destroy({
      where: { id: userId },
    }).then(() => {
      return res.status(200).json({
        message: "User has been deleted",
      });
    });
  } catch (error) {
    console.log(`Error on deleting user : ${error}`);

    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update user
const updateUser = async (req, res, _next) => {
  try {
    const { userId } = req.params;
    const { updatedEmail, updatedFirstName, updatedLastName } = req.body;

    if (!userId) {
      throw new Error("User ID is required");
    }

    if (!updatedEmail || !updatedFirstName || !updatedLastName) {
      throw new Error("All fields must be filled");
    }

    const user = await UserModel.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.email = updatedEmail;
    user.firstName = updatedFirstName;
    user.lastName = updatedLastName;

    user.save();

    return res.status(201).json({
      user: user,
      message: "User has been updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("All fields must be filled");
    }

    await UserModel.findOne({
      where: { email: email },
    }).then(async (user) => {
      if (!user) {
        return res.status(401).json({
          message: "Email or password is invalid",
        });
      }

      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (!isPasswordMatched) {
        return res.status(401).json({
          message: "Email or password is invalid",
        });
      } else {
        return res.status(200).json({
          message: "User has been authentificate successfully",
          user: user,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { getAllUsers, getUser, createUser, deleteUser, updateUser, loginUser };
