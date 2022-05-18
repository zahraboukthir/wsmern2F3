const Product = require("../models/Product");
//add product
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
//get all products
const allproduct=async (req, res) => {
  try {
    const allProducts = await Product.find({}).populate("user","fullName");
    res.send({ allProducts });
  } catch (err) {
    res.status(400).send(err.message);
  }
}
//get product by Id
const OneProduct= async (req, res) => {
  try {
    const oneProduct = await Product.findById(req.params.id);
    res.send({ oneProduct });
    //console.log(req.params.id);
  } catch (err) {
    res.status(400).send(err.message);
  }
}
//update product
const updateProduct=async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}`;
  console.log("file" ,req.file);
  const { file } = req;
  try {
    let updateProduct = await Product.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body,image:`${url}/${file.path}` } }
    );
    
    if (updateProduct.modifiedCount == 1) {
      return res.send({ msg: "product secessufly update" });
    }
    res.status(400).send({ msg: " no thing to update" });
  } catch (err) {
    res.status(400).send(err.message);
  }
}
// Delete Product
const deleteProduct= async (req, res) => {
  try {
    const deleteProduct = await Product.deleteOne({ _id: req.params.id });
    console.log(deleteProduct);
    if (deleteProduct.deletedCount == 1) {
      return res.send({ msg: "product secessufly deleted" });
    }
    res.status(400).send({msg:"product already deleted"})
  } catch (err) {
    res.status(400).send(err.message);
  }
}
module.exports = { addproduct,allproduct,OneProduct,updateProduct,deleteProduct };
