const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: String,
  price: String,
  company: String,
  category: String,
  userid: String,
});

const model = mongoose.model("Product", Schema);

module.exports = model;
