const express = require('express');
const { getAllUser, getUserById, registerUser } = require('../controllers/user-controller');
const route = express.Router()

route.get("/", getAllUser)
route.get("/:id", getUserById)
route.post("/", registerUser)
// route.get("/")


module.exports = route