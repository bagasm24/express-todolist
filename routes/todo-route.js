const express = require('express');
const { getAllTodo, getTodoById, addNewTodo, updateTodo, deleteTodo } = require('../controllers/todo-controller');
const route = express.Router()

route.get("/", getAllTodo)
route.get("/:id", getTodoById)
route.post("/", addNewTodo)
route.put("/:id", updateTodo)
route.delete("/:id", deleteTodo)


module.exports = route