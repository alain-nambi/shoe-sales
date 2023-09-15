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
router.get("/", getAllUsers);

// Get one user endpoint
router.get("/:userId", getUser);

// Create user endpoint
router.post("/create", createUser);

// Delete user endpoint
router.delete("/delete/:userId", deleteUser);

// Update user endpoint
router.put("/update/:userId", updateUser);

// Login user endpoint
router.post("/login", loginUser);

export default router;
