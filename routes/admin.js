const express = require("express");
const router = express.Router();
const Product = require("../models/product");


router.get("/testadmin", (req, res) => {
  res.send("Hello World!");
});

//add new product
router.post("/" , async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const response = await newProduct.save();
    res.send({ res: response, message: "New Product added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error , msg :"Can not Add Product" });
  }
});

// display  all products
router.get("/", async (req, res) => {
  try {
    const response = await Product.find();
    res.send({ res: response, message: "Gentting Product Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Products");
  }
});

// // find Product by id
router.get("/find/:id", async (req, res) => {
  try {
    const response = await Product.findOne({ _id: req.params.id });

    res.send({ res: response, message: "Gentting Product Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Product");
  }
});
// find Product by name
router.get("/:names", async (req, res) => {
  try {
    const search = req.params.names;
    console.log(req.params.names);
    const response = await Product.find({
      names: { $regex: new RegExp(search), $options: "is" },
    });
    console.log(response);
    res.send({ res: response, message: "Gentting Product Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Product");
  }
});
// Find Product By Categories 
router.get("/categories/:categories", async (req, res) => {
  try {
    const byCategories = req.params.categories;
    console.log(req.params.categories);
    const response = await Product.find({
      categories: { $regex: new RegExp(byCategories), $options: "is" },
    });
   
    res.send({ res: response, message: "Gentting Product By Categories Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Product");
  }
});
// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const response = await Product.deleteOne({ _id: req.params.id });
    response.deletedCount
      ? res.send({ message: "Product Deleted Successufly" })
      : res.send({ message: "Product Already DELETED" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Delete Contact");
  }
});

// Update Product
router.put("/:id", async (req, res) => {
  try {
    const response = await Product.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    response.nModified
      ? res.send({ message: "Product Updated Successufly" })
      : res.send({ message: "Product Already Update" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Update Contact");
  }
});

module.exports = router;
