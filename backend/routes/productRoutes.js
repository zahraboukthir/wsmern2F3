const express = require("express");
const {
  addproduct,
  allproduct,
  OneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontrollers");
const isAdmin = require("../middlewares/isAdmin");
const isAuthpassport = require("../middlewares/isAuthpassport");
const router = express.Router();
const upload = require("../utils/multer");
/**
 * @param POST /product/addProduct
 * @description add Product
 * @access PRIVATE ,Authorizd to Admin
 */
//addNewProduct
router.post(
  "/addProduct",
  isAuthpassport(),
  isAdmin,
  upload("products").single("file"),
  addproduct
);
/**
 * @param get /product
 * @description all product
 * @access PUblic
 */
router.get("/", allproduct);

/**
 * @param get /product/one/:id
 * @description get product by Id
 * @access Public
 */

router.get("/one/:id", OneProduct);
/**
 * @param put /product/update/:id
 * @description update product
 * @access PRIvate for admin
 */

router.put(
  "/update/:id",
  
  upload("products").single("file"),
  updateProduct
);
/**
 * @param delete /product/delete/:id
 * @description Delete Product
 * @access PRIvate for admin
 */
//
router.delete("/delete/:id", isAuthpassport(), isAdmin, deleteProduct);
module.exports = router;
