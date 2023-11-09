const { User } = require("../models");
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
  registerUser: async (req, res) => {
    const data = req.body;

    try {
      const hashPassword = bcrypt.hashSync(data.password, 10)
      data.password = hashPassword

      await User.create(data)

      res.status(201).json({
        message : "Berhasil menambahkan user"
      });
    } catch (error) {
      res.json({
        message: "Gagal menambahkan user",
        error : error.message
      })
    }
  },
};
