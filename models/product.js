const mongoose = require("mongoose");
const shema = mongoose.Schema;
const productSchema = new shema({
  names: { type: String, trim: true },
  descriptions: { type: String },
  images: { type: String },
  prices: { type: String },
  siteofficiel: { type: String },
  categories: { type: String , trim: true},
  desponiblitys: { type: String },
  linkproducts: { type: String },
  logoofficiel: { type: String },
});

module.exports = Product = mongoose.model("product", productSchema);
