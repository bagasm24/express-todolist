const express = require('express');
const { getAllTodo, getTodoById, addNewTodo, updateTodo, deleteTodo, deleteAllTodo } = require('../controllers/todo-controller');
const verifyToken = require('../middleware/auth');
const route = express.Router()

route.get("/", verifyToken, getAllTodo)
route.get("/:id", getTodoById)
route.post("/", addNewTodo)
route.put("/:id", updateTodo)
route.delete("/:id", deleteTodo)
route.delete("/", deleteAllTodo)


module.exports = route