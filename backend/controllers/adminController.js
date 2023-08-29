const Book = require("../models/Book");
const User = require("../models/User");
const AdminController = {
  refeshuser: async (idbook) => {
    User.find({ id_book: idbook }, (err, users) => {
      if (err) {
        console.error("Lỗi khi tìm kiếm:", err);
      } else {
        for (let i = 0; i < users.length; i++) {
          users[i].save();
        }
      }
    });
  },
  addbookdata: async (req, res) => {
    try {
      const newbook = new Book({
        namebook: req.body.namebook,
        author: req.body.author,
        img: req.body.img,
        description: req.body.description,
        bookstatus: req.body.bookstatus,
        numofpage: req.body.numofpage,
        rating: req.body.rating,
        price: req.body.price,
        discount: req.body.discount,
      });
      await newbook.save();
      res.json("Thêm sách thành công");
    } catch (error) {
      res.json(error.message);
    }
  },
  changeprice: async (req, res) => {
    try {
      const book = await Book.findOne({ _id: req.body._id });
      book.price = req.body.newprice;
      await book.save();
      AdminController.refeshuser(req.body._id);
      res.json("thay đổi giá sách thành công");
    } catch (error) {
      res.json(error.message);
    }
  },
  changediscount: async (req, res) => {
    try {
      const book = await Book.findOne({ _id: req.body._id });
      book.discount = req.body.newdiscount;
      await book.save();
      AdminController.refeshuser(req.body._id);
      res.json("thay discount giá sách thành công");
    } catch (error) {
      res.json(error.message);
    }
  },
  getuser: async (req, res) => {
    try {
      const users = await User.find(); // Lấy tất cả dữ liệu từ collection "users"
      res.json(users);
    } catch (error) {
      console.error(error);
    }
  },
  deleteuser: async (req, res) => {
    User.deleteOne({ _id: req.query.id }, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Đã xóa một tài liệu thành công");
      }
    });
    res.json("oke");
  },
  deletebook: async (req, res) => {
    Book.deleteOne({ _id: req.query.id }, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Đã xóa một tài liệu thành công");
      }
    });
    res.json("oke");
  },
};
module.exports = AdminController;
