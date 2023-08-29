const Book = require("../models/Book");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userController = {
  //GET ALL USERS

  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "24h" }
    );
  },
  refreshuser: async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    const accessToken = userController.generateAccessToken(user);
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  },
  //DELETE USER
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getBook: async (req, res) => {
    try {
      Book.find({}, (err, data) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.json(data);
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getBooknow: async (req, res) => {
    Book.findById(req.query.id, (err, data) => {
      if (err) {
        console.error("Error finding user:", err);
        return;
      }
      res.json(data);
    });
  },
};

module.exports = userController;
