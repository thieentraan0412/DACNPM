const User = require("../models/User.js");
const Book = require("../models/Book");
const { refeshuser } = require("./adminController.js");

const OrderController = {
  addOder: async (req, res, next) => {
    var neworder = {
      id_book:req.query.id_book,
      quantity: 1,
      total: 0,
    };
    try {
      const user = await User.findOne({ _id: req.query.id });
      const index = user.orders.findIndex(
        (obj) => obj.id_book == req.query.id_book
      );
      if (index == -1) {
        user.orders.push(neworder);
        await user.save();

      } else {
        user.orders[index].quantity++;
        await user.save();
      }

      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  deleteOrder: async (req, res, next) => {
    try {
      const user = await User.findOne({ _id: req.query.id });
      const index = user.orders.findIndex(
        (obj) => obj.id_book == req.query.id_book
      );
      if (index == -1) {
      } else {
        if (user.orders[index].quantity > 1) {
          user.orders[index].quantity--;
        } else {
          user.orders.splice(index, 1);
        }
        await user.save();
      }
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = OrderController;
