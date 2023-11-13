const { User }  = require("../models");
const { Todo } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  getAllUser: async (req, res) => {
    // const users = await User.findAll({include:Todo})
    const users = await User.findAll();
    res.json({
      message: "berhasil mendapatkan data user",
      data: users,
    });
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id: id },
      include: { model: Todo, as: "todos" },
    });
    res.json({
      message: "berhasil menampilkan data dengan id : " + id,
      data: user,
    });
  },
  getUserTodo: async (req, res) => {
    const { id } = req.params;

    const todos = await Todo.findAll({ where: { user_id: id } });

    res.json({
      message: "data todo dengan user " + id + " "+ "ditemukan",
      data : todos
    });
  },
};
