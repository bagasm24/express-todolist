const express = require("express");
const {
  getAllUser,
  getUserById,
  getUserTodo,
} = require("../controllers/user-controller");
const verifyToken = require("../middleware/auth");
const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/todo", verifyToken, getUserTodo);
// route.get("/")

module.exports = route;
