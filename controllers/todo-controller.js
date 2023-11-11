const { User } = require("../models");
const { Todo } = require("../models");

module.exports = {
  getAllTodo: async (req, res) => {
    // const users = await User.findAll({include:Todo})
    const todos = await Todo.findAll();
    res.json({
      message: "berhasil mendapatkan semua todo",
      data: todos,
    });
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findOne({
      where: { id: id },
      include: { model: User, as: "user" },
    });

    res.json({
      message: "berhasil menampilkan todo dengan id : " + id,
      data: todo,
    });
  },
  addNewTodo: async (req, res) => {
    const data = req.body;
    await Todo.create(data);
    res.status(201).json({
      message: "Berhasil menambahkan todo",
    });
  },
  updateTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await Todo.update(data, {
        where: {
          id: id,
        },
      });

      res.status(201).json({
        message: "Berhasil mengubah data todo",
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengubah data todo",
        error: error.message,
      });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const { id } = req.params;
      await Todo.destroy({
        where: {
          id : id
        }
      });
      res.json({
        message : "Data Todo Berhasil dihapus"
      })
    } catch (error) {
      res.status(500).json({
        message: "Gagal menghapus data todo",
        error: error.message,
      });
    }
  },
  deleteAllTodo : async (req, res) => {
    try {
      await Todo.truncate();
      res.json({
        message : "Semua data Todo Berhasil dihapus"
      })
    } catch (error) {
      res.status(500).json({
        message: "Gagal menghapus semua data todo",
        error: error.message,
      });
    }
  }
};
