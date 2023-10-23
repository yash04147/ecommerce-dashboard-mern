const express = require("express");
const app = express();
const port = 3001;
require("./Database/Connection");
const User = require("./Database/Userschema");
const Product = require("./Database/Productschema");
app.use(express.json());

//home route
app.get("/", (req, res) => {
  res.send("this is home route");
});

//signup route
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const usersave = await user.save();
    res.send(usersave);
  } catch (error) {
    console.log(error);
  }
});

//login route
app.post("/login", async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//add product
app.post("/addproduct", async (req, res) => {
  try {
    const product = new Product(req.body);
    const productsave = await product.save();
    res.send(productsave);
  } catch (error) {
    console.log(error);
  }
});

//get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.log(error);
  }
});

//get single product details
app.get("/products/:id", async (req, res) => {
  try {
    const productdetail = await Product.findById({ _id: req.params.id });
    res.send(productdetail);
  } catch (error) {
    console.log(error);
  }
});

// update product details
app.put("/products/:id", async (req, res) => {
  try {
    const update = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(update);
  } catch (error) {
    console.log(error);
  }
});

// delete product route
app.delete("/products/:id", async (req, res) => {
  try {
    const deletedata = await Product.findByIdAndDelete({ _id: req.params.id });
    res.send(deletedata);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
