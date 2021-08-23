const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/testproduct", (req, res) => {
  res.send(req.body);
});

//display  product
router.get("/", async (req, res) => {
  try {
    const response = await Product.find();
    res.send({ res: response, message: "Gentting Product Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Products");
  }
});
// find contact by name
/*router.get("/product/:names", async (req, res) => {
  try {
    // const response = await Product.find({ names: req.params.names });
    const response = await Product.find({
      names:{ $regex:/req.params.names/, $options: "i" },
    });
    res.send({ res: response, message: "Gentting Product By names Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Product");
  }
});*/

// find product by categories
/*router.get("/categories/:categories", async (req, res) => {
  try {
    // const response = await Product.find({ names: req.params.names });
    const response = await Product.find({
      categories: { $regex: /req.params.categories/, $options: "i" },
    });
    res.send({ res: response, message: "Getting  Product By Categories Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Product");
  }
});*/


// find contact by id
router.get("/:id", async (req, res) => {
  try {
    const response = await Product.findOne({ _id: req.params.id });

    res.send({ res: response, message: "Gentting Product Successufly" });
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
module.exports = router;
