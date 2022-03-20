const express = require('express');
const UserController=require('../controller/user');

const md_auth = require("../middleware/authenticated");
const api = express.Router();

api.post("/register",UserController.register);
api.post("/login",UserController.login);
api.get("/protected",[md_auth.ensureAuth],UserController.protected);

module.exports = api;
