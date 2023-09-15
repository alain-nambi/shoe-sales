// This code will start a simple Node.js server that listens on specified port.

// Import env variales from .env file
import dotenv from "dotenv"
dotenv.config()


// Requires the Express module.
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

// Import all availables routes
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js"

// Creates an Express application.
// This is the main entry point for your application.
const app = express();

// Enable CORS.
app.use(cors());

// Parse HTTP request bodies.
// Use the body-parser middleware to parse HTTP request bodies.
// This allows you to access the data that is sent in the body of an HTTP request.
// The `json()` option tells body-parser to parse JSON data.
app.use(bodyParser.json());

// The `urlencoded({extended: false})` option tells body-parser to parse URL-encoded data, but only the standard format.
app.use(bodyParser.urlencoded({extended: false}));

// Defines a users route 
// that will match any HTTP request to the `/api/v1/*` endpoint.
app.use("/api/users", UserRoute)
app.use("/api/products", ProductRoute)

// Defines the port number.
const PORT = process.env.PORT || 4005;
// Start the server.
app.listen(PORT)

console.log(`Server running on port ${PORT}`);