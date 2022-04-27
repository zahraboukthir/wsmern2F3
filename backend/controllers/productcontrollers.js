const Product = require("../models/Product");

const addproduct = async (req, res) => {
  // protocole :http
  // host : localhost
  const url = `${req.protocol}://${req.get("host")}`;
  console.log(req.file);
  const { file } = req;
  try {
    const newProduct = new Product({ ...req.body, user: req.user._id });
    newProduct.image = `${url}/${file.path}`;
    await newProduct.save();
    res.send({ product: newProduct, message: "product succesffuly" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const allproduct=async (req, res) => {
  try {
    const allProducts = await Product.find({}).populate("user","fullName");
    res.send({ allProducts });
  } catch (err) {
    res.status(400).send(err.message);
  }
}
module.exports = { addproduct,allproduct };
