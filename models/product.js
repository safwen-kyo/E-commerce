const mongoose = require("mongoose");
const shema = mongoose.Schema;
const productSchema = new shema({
  names: { type: String, trim: true , required : true},
  descriptions: { type: String ,required: true },
  images: { type: String , required: true},
  prices: { type: String , required: true},
  siteofficiel: { type: String , required: true},
  categories: { type: String , trim: true , required: true},
  desponiblitys: { type: String , required: true},
  linkproducts: { type: String , required: true},
  logoofficiel: { type: String , required: true},
});

module.exports = Product = mongoose.model("product", productSchema);
