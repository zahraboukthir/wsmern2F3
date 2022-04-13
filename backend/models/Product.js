const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  qte: Number,
  image: String,
  createDate: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
module.exports = Product = mongoose.model("product", productSchema);
