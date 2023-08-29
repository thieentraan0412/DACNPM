const mongoose = require("mongoose");
const order = require("./order");
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
    orders: {
      type: [
        {
          id_book:{type:String},
          namebook: { type: String },
          quantity: { type: Number },
          price: { type: Number, default:0,},
          discount: { type: Number,default:0,},
          total: { type: Number,},
        }
      ],
    },
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


// userSchema.pre('findOneAndUpdate', function(next) {
//   const update = this.getUpdate();
//   next();
// });
userSchema.pre('save', function(next) {

  this.orders = this.orders.map(data=>
    {
        return data.total = data.quantity * data.price * (1-data.discount/100)
    })
  this.totalprice = this.orders.reduce((acc,current)=>
  {
      return acc + current.total;
  },0)
  next();
});


module.exports = mongoose.model("User", userSchema);