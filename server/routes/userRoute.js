import {
  createUser,
  deleteUser,
  getUser,
  loginUser,
  getAllUsers,
  updateUser,
} from "../controllers/UserController.js"

import express from "express";

const router = express.Router();

// Get all users endpoint
router.get("/users", getAllUsers);

// Get one user endpoint
router.get("/users/:userId", getUser);

// Create user endpoint
router.post("/users/create", createUser);

// Delete user endpoint
router.delete("/users/delete/:userId", deleteUser);

// Update user endpoint
router.put("/users/update/:userId", updateUser);

// Login user endpoint
router.post("/users/login", loginUser);

export default router;
