const express = require('express');
const route = express.Router()

const userRoute = require("./user-route")
const todoRoute = require("./todo-route")
const authRoute = require("./auth-route");
const verifyToken = require('../middleware/auth');

route.get("/", (req, res) => {
    res.json({
        message : "Selamat Datang"
    })
})

route.use("/users", userRoute)
route.use("/todos", verifyToken ,todoRoute)
route.use("/auth", authRoute)

module.exports = route