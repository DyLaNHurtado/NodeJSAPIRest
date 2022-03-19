const express = require('express');
const TaskController=require('../controller/task');

const api = express.Router();

api.post("/task",TaskController.postTask);
api.get("/task",TaskController.getAll);
api.get("/task/:id",TaskController.getById);
api.put("/task/:id",TaskController.putTask);
api.delete("/task/:id",TaskController.deleteTask);

module.exports = api;
