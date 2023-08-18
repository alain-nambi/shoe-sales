// This code will start a simple Node.js server that listens on specified port.

// Import env variales from .env file
require("dotenv").config()

// Requires the Express module.
const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

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


// Defines the port number.
const PORT = process.env.PORT || 4005;

// Defines a route that will match any HTTP request to the `/` endpoint.
app.use("/api/v1", require("./routes/userRoute"))

// Start the server.
app.listen(PORT)

console.log(`Server running on port ${PORT}`);