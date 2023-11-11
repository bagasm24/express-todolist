const jwt = require("jsonwebtoken");
const { User } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config()

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({ where: { email: userLogin.email } });
      if (!user) throw new Error("Email salah atau invalid");

        const checkPassword = bcrypt.compareSync(userLogin.password, user.password)

        if (!checkPassword) throw new Error ("invalid Password")

        const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY)

         res.json({
          message: "login successfull",
          user_id: user.id,
          token,
        })
    } catch (error) {
      res.json(error.message);
    }
  },
  register: async (req, res) => {
    const data = req.body;

    try {
      const hashPassword = bcrypt.hashSync(data.password, 10);
      data.password = hashPassword;

      await User.create(data);

      res.status(201).json({
        message: "Berhasil menambahkan user",
      });
    } catch (error) {
      res.json({
        message: "Gagal menambahkan user",
        error: error.message,
      });
    }
  },
};
