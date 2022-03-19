const express = require('express');
const app = express();

// --- Load Data ---
const hello_routes = require('./routes/hello');

// --- Base Routes ---
app.use("/api/v1/",hello_routes);

module.exports=app;