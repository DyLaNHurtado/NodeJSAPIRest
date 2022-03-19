const express = require('express');
const HelloController=require('../controller/hello');

const api = express.Router();

api.get("/hello",HelloController.getHello);

module.exports = api;
