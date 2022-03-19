const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// --- Load Data ---
const hello_routes = require('./routes/hello');
const task_routes = require('./routes/task');

// --- Base Routes ---
app.use("/api/v1/",hello_routes);
app.use("/api/v1/",task_routes);

module.exports=app;