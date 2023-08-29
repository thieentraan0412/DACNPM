const mongoose = require("mongoose");
const Book = require("./Book");


const OrderSchema = new mongoose.Schema({
  idbook:{type:String},
  namebook: { type: String },
  quantity: { type: Number },
  price: { type: Number, default:0,},
  discount: { type: Number,default:0,},
  total: { type: Number,},
});


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone:
    {
      type:String,
    },
    orders: [
        {
          id_book:{type:String},
          namebook: { type: String },
          img: { type: String },
          author: {type: String},
          price:{ type: Number },
          discount:{ type: Number },
          quantity: { type: Number },
          total: { type: Number,},
        }
    ],
    totalprice: {
      type: Number,
      default:0,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


 userSchema.pre('save', async function(next) {
  if(this.orders.length > 0) 
  {
    for (let i = 0; i < this.orders.length; i++) {
      const book = await Book.findOne({ _id: this.orders[i].id_book });
      this.orders[i].namebook=book.namebook;
      this.orders[i].img=book.img;
      this.orders[i].author=book.author;
      this.orders[i].price=book.price;
      this.orders[i].discount=book.discount;
      this.orders[i].total = book.price * this.orders[i].quantity * (1-book.discount/100);
    }
      this.totalprice = this.orders.reduce((acc,current)=>
    {
      return acc + current.total;
    },0)
    next()
  };

  next();
});


module.exports = mongoose.model("User", userSchema);