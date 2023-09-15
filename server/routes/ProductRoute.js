import express from "express";
import { getAllProducts } from "../controllers/ProductController.js";
const router = express.Router();

// Get all products : GET /api/v1/products
router.get("/", getAllProducts);

// // Get one product : GET /api/v1/products/:productId
// router.get("/products/:productId", ProductController.getProduct)

// // Create a product : POST /api/v1/products/create
// router.post("/products/create", ProductController.createProduct)

// // Delete a product : DELETE /api/v1/products/delete/:productId
// router.delete("/products/delete/:productId", ProductController.deleteProduct)

// // Update a product : PUT /api/v1/products/update/:productId
// router.put("/products/update/:productId", ProductController.updateProduct)

export default router;
