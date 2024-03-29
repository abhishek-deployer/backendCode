const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model("Product", productSchema);
