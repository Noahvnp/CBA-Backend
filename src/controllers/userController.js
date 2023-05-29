const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const userController = {
  // GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE USER
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE USER
  updateUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body, password: hashed } }
      );
      if (!user) {
        res.status(404).json("Not found");
      }
      res.status(200).json(`Successfully updated user ${req.body.username}`);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
