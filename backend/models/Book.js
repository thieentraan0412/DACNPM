const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
    {
      namebook: {
        type: String,
        required: true,
        unique:true,
      },
      author: {
        type: String,
      },
      img: {
        type: String,
      },
      genre: {
        type: String,
      },
      description:
      {
        type:String,
      },
      bookstatus: {
        type: String,
      },
      numofpage: {
        type: Number,
      },
      rating: {
        type: Number,
      },
      price: {
        type: Number,
      },
      discount: {
        type: Number,
      },
    },
    { timestamps: true }
  );

  
  bookSchema.pre('save', async function(next) {

    next();
  });
  

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;